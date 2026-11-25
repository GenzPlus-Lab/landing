// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
  output: 'static',
  markdown: {
    processor: unified({ remarkPlugins: [remarkBreaks] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
