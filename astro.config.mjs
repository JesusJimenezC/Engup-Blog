// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import compressor from 'astro-compressor';
import deleteUnusedImages from 'astro-delete-unused-images';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.DIRECTUS_URL': JSON.stringify(process.env.DIRECTUS_URL || 'http://localhost:8055'),
      'import.meta.env.DIRECTUS_PUBLIC_URL': JSON.stringify(process.env.DIRECTUS_PUBLIC_URL || 'http://localhost:8055'),
    },
  },
  integrations: [compressor(), deleteUnusedImages()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: Number(process.env.APP_PORT) || 4321,
    host: process.env.APP_HOST || '0.0.0.0',
  },
});