# Cómo editar el contenido dinámico del sitio

Esta carpeta (`src/content/`) es el **único lugar** donde debe vivir el contenido
que cambia con el tiempo: comité, proyectos, eventos y líneas de trabajo. Nunca
edites textos, nombres o fotos directamente en los archivos `.astro` de
`src/components/` — esos archivos solo definen el diseño, no el contenido.

No necesitas saber programar. Cada elemento (una persona, un proyecto, un
evento, una línea) es un archivo `.md` independiente con este formato:

```md
---
campo: valor
otroCampo: valor
---

Texto libre en Markdown (opcional, según la colección).
```

Para agregar un elemento nuevo: copia un archivo existente de la misma carpeta,
cambia el nombre del archivo y edita los valores. Para quitar uno: borra el
archivo. Los cambios se reflejan al reconstruir el sitio (`npm run build`) o
automáticamente en `npm run dev`.

## `team/` — Comité y equipo

```yaml
name: Nombre completo
role: Cargo (p. ej. "Presidente")
order: 1            # posición en la grilla (1 = primero)
category: Liderazgo  # Liderazgo | Desarrollo & IA | Asesoría
focus: ["Área 1", "Área 2"]
image: /images/usuario_ieee.webp
linkedin: https://linkedin.com/in/usuario   # opcional
github: https://github.com/usuario          # opcional
featured: true       # true solo para la tarjeta destacada (presidencia)
---
Biografía breve (1-2 frases). Opcional.
```

## `projects/` — Proyectos / TRACE, etc.

```yaml
title: Nombre del proyecto
featured: true                 # true = proyecto destacado del showcase
society: CONVERGENCE           # CS | CIS | CONVERGENCE
category: Categoría corta
tagline: Una frase resumen
status: "Desarrollo Activo"     # Desarrollo Activo | Completado | Investigación
technologies: ["Python", "Docker"]
team: ["Nombre 1", "Nombre 2"]  # o el nombre del equipo/organización
image: /images/project-vision.webp
demoUrl: https://...            # opcional
repoUrl: https://github.com/...  # opcional
order: 1
---
Descripción del problema y la solución (Markdown libre).
```

## `events/` — Eventos

**Regla importante: nunca inventar eventos ni fechas.** Si no hay un evento
confirmado, simplemente no crear el archivo — la sección mostrará un estado
vacío honesto en vez de datos ficticios.

```yaml
title: Nombre del evento
type: Workshop            # Workshop | Tech Talk | Hackathon | Bootcamp | Panel | Demo Day
date: "2026-11-08"         # fecha real en formato ISO
time: "5:00 PM - 6:30 PM"  # opcional
location: Lugar            # opcional
modality: Presencial       # Presencial | Híbrido | Virtual
status: upcoming           # upcoming | featured | past
registrationUrl: https://formulario-ieee-utb.vercel.app/  # opcional
image: /images/event-workshop.webp  # opcional
order: 1
---
Resumen del evento (Markdown libre).
```

## `lines/` — Líneas de trabajo (AI & Agentes, Automatización, etc.)

```yaml
title: AI & Agentes
icon: "🤖"
tagline: Descripción breve de la línea.
order: 1
```

## Textos institucionales (misión, visión, redes, enlaces)

Los textos que no son "una lista de elementos" (misión, visión, tagline,
redes sociales, enlace de inscripción) viven en `src/data/site.ts`, en la
constante `siteConfig`. Es un único archivo, simple de editar: cada campo es
una línea de texto entre comillas.
