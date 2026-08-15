// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gustaf30.github.io',
  base: '/ct-arena/',
  vite: {
    plugins: [tailwindcss()]
  }
});