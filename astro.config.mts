import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import million from 'million/compiler';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [million.vite({ mode: 'react', server: true, auto: true })]
  },
  integrations: [react(), sitemap()]
});