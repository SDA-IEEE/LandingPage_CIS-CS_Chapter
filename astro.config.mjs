// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Integración mínima: tras el build, inyecta <link rel="modulepreload">
 * en dist/index.html para los chunks JS de las secciones (About,
 * ScrollPhrase) y el bundle de GSAP. Así el navegador los descarga en
 * PARALELO desde el parseo del HTML en lugar de descubrirlos en cascada
 * (HTML → About.js → preload-helper → gsap-bundle), acortando la latencia
 * máxima de la ruta crítica. Los nombres con hash se leen del propio build.
 */
const modulepreloadSections = () => ({
  name: 'modulepreload-sections',
  hooks: {
    'astro:build:done': (/** @type {{ dir: URL }} */ { dir }) => {
      const outDir = dir.pathname.replace(/^\/+([A-Za-z]:)/, '$1');
      const astroDir = join(outDir, '_astro');
      const files = readdirSync(astroDir).filter((f) => f.endsWith('.js'));
      const wanted = files.filter(
        (f) =>
          f.startsWith('About.') ||
          f.startsWith('ScrollPhrase.') ||
          f.startsWith('preload-helper.') ||
          f.startsWith('gsap-bundle.'),
      );
      if (wanted.length === 0) return;

      const indexPath = join(outDir, 'index.html');
      let html = readFileSync(indexPath, 'utf8');
      const links = wanted
        .map(
          (f) =>
            `<link rel="modulepreload" href="/_astro/${f}" fetchpriority="low" />`,
        )
        .join('');
      html = html.replace('</head>', `${links}</head>`);
      writeFileSync(indexPath, html, 'utf8');
    },
  },
});

// https://astro.build/config
export default defineConfig({
  // Usado para generar canonical URLs, Open Graph y el sitemap.
  // Actualizar si el dominio final de publicación cambia.
  site: 'https://landing-page-cis-cs-chapter.vercel.app',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap(), modulepreloadSections()],
  build: {
    // Inyecta el CSS del bundle directamente en <style> del HTML.
    // Elimina la petición CSS (~13 KiB comprimidos) de la ruta crítica,
    // mejorando FCP/LCP sobre todo en móviles.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          // Fusiona GSAP + ScrollTrigger (+ su core) en UN solo chunk.
          // Así el import dinámico resuelve con una sola petición de red en
          // lugar de una cadena gsap → ScrollTrigger, acortando la ruta crítica.
          manualChunks(id) {
            if (id.includes("node_modules/gsap")) return "gsap-bundle";
          },
        },
      },
    },
  },
});
