/**
 * Plan de Pruebas QA — Landing Page
 * Sección 2: Pruebas de Disponibilidad (Uptime ≥ 80%)
 * Depende de Tarea 3.2 / 3.3 (confirmar con Persona 1, ver nota en el plan original)
 *
 * Requiere: Node 18+ (fetch nativo) o node-fetch, TypeScript
 * Ejecución sugerida: cron cada 5 min durante la ventana de 48h, o GitHub Actions schedule.
 *
 * npm i -D typescript ts-node @types/node
 * npx ts-node pruebas-disponibilidad.ts
 */

import https from "https";
import { URL } from "url";

// ---------- Configuración ----------
const SITE_URL = process.env.SITE_URL || "https://landing-page-cis-cs-chapter.vercel.app/";
const RECOVERY_TIMEOUT_MINUTES = Number(process.env.RECOVERY_TIMEOUT_MINUTES || 10); // definir con Persona 1
const ALERT_WEBHOOK_URL = process.env.ALERT_WEBHOOK_URL || ""; // Slack/Email webhook
const REGIONS_CHECK_URL = "https://check-host.net/check-http"; // referencia, requiere API/token propio

interface CheckResult {
  id: string;
  description: string;
  passed: boolean;
  details: string;
  timestamp: string;
}

const results: CheckResult[] = [];

function logResult(id: string, description: string, passed: boolean, details: string) {
  const result: CheckResult = {
    id,
    description,
    passed,
    details,
    timestamp: new Date().toISOString(),
  };
  results.push(result);
  console.log(`[${passed ? "PASS" : "FAIL"}] ${id} — ${description} :: ${details}`);
}

// ---------- D-01: Monitoreo continuo de uptime ----------
// Nota: esta función hace UNA medición puntual. Para cumplir "mín. 48h" debe
// programarse externamente (cron/CI) y acumular resultados en un log/DB,
// o preferiblemente usar UptimeRobot/Pingdom/StatusCake como indica el plan.
async function checkD01_Uptime(): Promise<boolean> {
  const start = Date.now();
  try {
    const res = await fetch(SITE_URL, { method: "GET" });
    const latencyMs = Date.now() - start;
    const ok = res.status >= 200 && res.status < 400;
    logResult(
      "D-01",
      "Monitoreo continuo (medición puntual)",
      ok,
      `status=${res.status} latency=${latencyMs}ms`
    );
    return ok;
  } catch (err) {
    logResult("D-01", "Monitoreo continuo (medición puntual)", false, `error=${(err as Error).message}`);
    return false;
  }
}

// ---------- D-02: Tiempo de recuperación ----------
// Requiere disparar manualmente (o vía API) el reinicio del servicio en staging
// antes de llamar a esta función. Aquí solo se mide el tiempo hasta que vuelve a responder.
async function checkD02_RecoveryTime(): Promise<boolean> {
  console.log(`D-02: iniciando medición de recuperación (timeout ${RECOVERY_TIMEOUT_MINUTES} min)...`);
  const deadline = Date.now() + RECOVERY_TIMEOUT_MINUTES * 60 * 1000;
  const start = Date.now();

  while (Date.now() < deadline) {
    try {
      const res = await fetch(SITE_URL, { method: "GET" });
      if (res.status >= 200 && res.status < 400) {
        const recoverySeconds = Math.round((Date.now() - start) / 1000);
        logResult(
          "D-02",
          "Tiempo de recuperación tras caída simulada",
          true,
          `recuperado en ${recoverySeconds}s (límite ${RECOVERY_TIMEOUT_MINUTES}min)`
        );
        return true;
      }
    } catch {
      // sigue caído, se reintenta
    }
    await new Promise((r) => setTimeout(r, 5000)); // poll cada 5s
  }

  logResult(
    "D-02",
    "Tiempo de recuperación tras caída simulada",
    false,
    `no se recuperó dentro de ${RECOVERY_TIMEOUT_MINUTES} minutos`
  );
  return false;
}

// ---------- D-03: Disponibilidad por región ----------
// Referencia: check-host.net u otra herramienta similar requiere su propia API/token.
// Aquí se deja el esqueleto de la llamada; reemplazar con la API real disponible.
async function checkD03_RegionalAvailability(): Promise<boolean> {
  logResult(
    "D-03",
    "Disponibilidad por región",
    false,
    "PENDIENTE: integrar API de check-host.net (o similar) con token propio. " +
      `Verificar manualmente en ${REGIONS_CHECK_URL} contra ${SITE_URL} desde ≥3 regiones.`
  );
  return false;
}

// ---------- D-04: Alertas de caída ----------
async function checkD04_DownAlert(): Promise<boolean> {
  if (!ALERT_WEBHOOK_URL) {
    logResult("D-04", "Alertas de caída", false, "ALERT_WEBHOOK_URL no configurado, no se puede validar");
    return false;
  }
  const start = Date.now();
  try {
    const res = await fetch(ALERT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: `[TEST] Simulación de alerta de caída para ${SITE_URL}` }),
    });
    const elapsedMs = Date.now() - start;
    const ok = res.ok && elapsedMs < 5 * 60 * 1000; // < 5 min
    logResult("D-04", "Alertas de caída", ok, `webhook status=${res.status} tiempo=${elapsedMs}ms`);
    return ok;
  } catch (err) {
    logResult("D-04", "Alertas de caída", false, `error=${(err as Error).message}`);
    return false;
  }
}

// ---------- D-05: Certificado SSL activo ----------
function checkD05_SslCertificate(): Promise<boolean> {
  return new Promise((resolve) => {
    const { hostname, port } = new URL(SITE_URL);
    const req = https.request(
      {
        host: hostname,
        port: port || 443,
        method: "GET",
        rejectUnauthorized: true, // fuerza validación real del certificado
      },
      (res) => {
        const cert = (res.socket as any).getPeerCertificate?.();
        if (!cert || Object.keys(cert).length === 0) {
          logResult("D-05", "Certificado SSL activo", false, "no se pudo leer el certificado");
          resolve(false);
          return;
        }
        const now = new Date();
        const validTo = new Date(cert.valid_to);
        const daysLeft = Math.round((validTo.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        const ok = validTo > now;
        logResult(
          "D-05",
          "Certificado SSL activo",
          ok,
          `válido hasta=${cert.valid_to} (${daysLeft} días restantes)`
        );
        resolve(ok);
      }
    );
    req.on("error", (err) => {
      logResult("D-05", "Certificado SSL activo", false, `error=${err.message}`);
      resolve(false);
    });
    req.end();
  });
}

// ---------- Runner ----------
async function main() {
  console.log(`\n=== Pruebas de Disponibilidad — ${SITE_URL} ===\n`);

  await checkD01_Uptime();
  await checkD05_SslCertificate();
  await checkD04_DownAlert();
  await checkD03_RegionalAvailability();
  // D-02 se deja fuera del run automático por defecto: requiere disparar la caída manualmente.
  // Descomentar cuando el servicio en staging haya sido reiniciado a propósito:
  // await checkD02_RecoveryTime();

  const passed = results.filter((r) => r.passed).length;
  console.log(`\n=== Resumen: ${passed}/${results.length} pruebas OK ===`);
  console.table(results);

  process.exit(results.some((r) => !r.passed) ? 1 : 0);
}

main();
