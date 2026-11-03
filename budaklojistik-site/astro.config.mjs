import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cloudflare Pages ortamında SITE_URL ayarlanırsa onu kullan; yoksa ana alan adını esas al.
export default defineConfig({
  site: process.env.SITE_URL || 'https://budaklojistik.com',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
