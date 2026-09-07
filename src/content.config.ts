import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * CONTENIDO DINÁMICO DEL SITIO
 * ============================
 * Cada colección es una carpeta de archivos Markdown (.md) dentro de
 * `src/content/<coleccion>/`. Editar el contenido del sitio (comité,
 * proyectos, eventos, líneas de trabajo) NO requiere tocar componentes
 * ni código: basta con crear, editar o borrar un archivo .md.
 *
 * Cada archivo tiene dos partes:
 *   1. Frontmatter (entre ---) -> datos estructurados (nombre, rol, fecha...)
 *   2. Cuerpo Markdown (debajo del segundo ---) -> texto libre (bio, resumen...)
 *
 * Ver src/content/README.md para la guía completa de edición.
 */

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    // Orden de aparición en la sección Equipo (menor = primero)
    order: z.number().default(99),
    category: z.enum(['Liderazgo', 'Desarrollo & IA', 'Asesoría']).default('Liderazgo'),
    focus: z.array(z.string()).default([]),
    image: z.string().default('/images/member-1.jpg'),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    featured: z.boolean().default(false),
    society: z.enum(['CS', 'CIS', 'CONVERGENCE']).default('CONVERGENCE'),
    category: z.string(),
    tagline: z.string(),
    status: z.enum(['Desarrollo Activo', 'Completado', 'Investigación']).default('Desarrollo Activo'),
    technologies: z.array(z.string()).default([]),
    team: z.array(z.string()).default([]),
    image: z.string(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Workshop', 'Tech Talk', 'Hackathon', 'Bootcamp', 'Panel', 'Demo Day']),
    // Fecha real en formato ISO (YYYY-MM-DD). No inventar fechas.
    date: z.string(),
    time: z.string().optional(),
    location: z.string().optional(),
    modality: z.enum(['Presencial', 'Híbrido', 'Virtual']).default('Presencial'),
    status: z.enum(['upcoming', 'featured', 'past']).default('upcoming'),
    registrationUrl: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(99),
  }),
});

const lines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lines' }),
  schema: z.object({
    title: z.string(),
    // Emoji/ícono mostrado junto al título (p. ej. "🤖")
    icon: z.string(),
    tagline: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { team, projects, events, lines };
