/**
 * Plan de Pruebas QA — Landing Page
 * Sección 4: Pruebas de Estrés
 * Depende de que la Tarea 3.2 (optimización de carga) esté completa.
 * IMPORTANTE: ejecutar contra staging (entorno idéntico a producción), no en producción.
 *
 * Requiere: k6 (https://k6.io) — soporta TypeScript de forma nativa desde k6 v0.53+
 * Instalación: https://k6.io/docs/get-started/installation/
 *
 * Ejecución de UN escenario específico, ej. carga concurrente moderada:
 *   k6 run --env SCENARIO=E01 pruebas-estres.ts
 * Ejecución con URL de staging:
 *   k6 run --env BASE_URL=https://staging.ejemplo-landing.com pruebas-estres.ts
 *
 * Por defecto, si no se pasa SCENARIO, k6 ejecuta TODOS los escenarios definidos abajo.
 */

import http from "k6/http";
import { check, sleep } from "k6";
import { Rate, Trend } from "k6/metrics";
import type { Options, Response } from "k6";

// Declare k6 globals
declare const __ENV: Record<string, string>;
declare const __VU: number;
declare const __ITER: number;

const BASE_URL = __ENV.BASE_URL || "https://landing-page-cis-cs-chapter.vercel.app/";
const JOIN_US_PATH = __ENV.JOIN_US_PATH || "/join-us";

// Métricas custom
const errorRate = new Rate("errores");
const responseTrend = new Trend("tiempo_respuesta_custom");

// ---------- Escenarios (E-01 a E-04) ----------
// Cada escenario es un bloque independiente para poder correrlos por separado
// vía --env SCENARIO=E01 / E02 / E03 / E04, o todos juntos por defecto.
export const options: Options = {
  scenarios: {
    // E-01: Carga concurrente moderada — 50-100 usuarios, resp. promedio < 3s
    E01_carga_moderada: {
      executor: "ramping-vus",
      exec: "scenarioNavegacion",
      startVUs: 0,
      stages: [
        { duration: "1m", target: 50 },
        { duration: "3m", target: 100 },
        { duration: "1m", target: 0 },
      ],
      tags: { escenario: "E-01" },
    },
    // E-02: Carga pico (spike test) — 500 usuarios en 1 minuto, error rate < 1%
    E02_carga_pico: {
      executor: "ramping-vus",
      exec: "scenarioNavegacion",
      startVUs: 0,
      startTime: "6m", // arranca después de E-01 si se corren todos juntos
      stages: [
        { duration: "1m", target: 500 },
        { duration: "2m", target: 500 },
        { duration: "1m", target: 0 },
      ],
      tags: { escenario: "E-02" },
    },
    // E-03: Carga sostenida (soak test) — 100 usuarios, 15-30 min, sin degradación
    E03_carga_sostenida: {
      executor: "constant-vus",
      exec: "scenarioNavegacion",
      vus: 100,
      duration: "20m",
      startTime: "11m",
      tags: { escenario: "E-03" },
    },
    // E-04: Estrés en formulario Join Us — envíos concurrentes, sin duplicar registros
    E04_estres_join_us: {
      executor: "ramping-vus",
      exec: "scenarioJoinUs",
      startVUs: 0,
      startTime: "32m",
      stages: [
        { duration: "30s", target: 30 },
        { duration: "1m", target: 30 },
        { duration: "30s", target: 0 },
      ],
      tags: { escenario: "E-04" },
    },
  },
  thresholds: {
    // Criterios de aceptación globales (ajustables por escenario con tags si se requiere)
    http_req_duration: ["p(95)<3000"], // E-01: tiempo de respuesta promedio < 3s
    http_req_failed: ["rate<0.01"], // E-02: tasa de error < 1%
    errores: ["rate<0.01"],
  },
};

// ---------- E-01 / E-02 / E-03: navegación estándar por el sitio ----------
export function scenarioNavegacion() {
  const routes = ["/", "/eventos", "/proyectos", "/comite", "/lineas-investigacion"];
  const route = routes[Math.floor(Math.random() * routes.length)];

  const res = http.get(`${BASE_URL}${route}`);
  responseTrend.add(res.timings.duration);

  const ok = check(res, {
    "status es 200": (r: Response) => r.status === 200,
    "respuesta < 3000ms": (r: Response) => r.timings.duration < 3000,
  });
  errorRate.add(!ok);

  sleep(Math.random() * 2 + 1); // simula tiempo de lectura entre 1-3s
}

// ---------- E-04: estrés en el formulario Join Us ----------
// Nota: E-05 (consumo de recursos del servidor) NO se mide desde k6 — requiere
// monitoreo paralelo desde el panel del proveedor de hosting o New Relic
// mientras corre este mismo script (ver README/nota abajo).
export function scenarioJoinUs() {
  const payload = JSON.stringify({
    nombre: `Usuario Prueba ${__VU}-${__ITER}`,
    email: `prueba+${__VU}-${__ITER}@ejemplo.com`,
    mensaje: "Prueba de estrés automatizada — E-04",
  });

  const res = http.post(`${BASE_URL}${JOIN_US_PATH}`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  responseTrend.add(res.timings.duration);

  const ok = check(res, {
    "envío aceptado (2xx)": (r: Response) => r.status >= 200 && r.status < 300,
    "sin error de servidor (5xx)": (r: Response) => r.status < 500,
  });
  errorRate.add(!ok);

  sleep(1);
}

/**
 * ---------- E-05: Consumo de recursos del servidor ----------
 * No automatizable desde k6 (k6 solo genera carga, no lee métricas del servidor).
 * Durante la ejecución de cualquiera de los escenarios anteriores, monitorear
 * manualmente o vía API:
 *   - Panel del proveedor de hosting (CPU, RAM, ancho de banda)
 *   - New Relic / Datadog si está integrado
 * Criterio de aceptación: uso de recursos dentro de los límites definidos por Persona 1.
 */
