// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';
import { unified } from '@astrojs/markdown-remark';

// Astro does not load .env files into the config, so read them here.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), 'PUBLIC_');

export default defineConfig({
  site: PUBLIC_SITE_URL || 'https://genzplustech.com/',
  output: 'static',
  markdown: {
    processor: unified({ remarkPlugins: [remarkBreaks] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
