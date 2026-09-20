// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Usado para generar canonical URLs, Open Graph y el sitemap.
  // Actualizar si el dominio final de publicación cambia.
  site: 'https://landing-page-cis-cs-chapter.vercel.app',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
