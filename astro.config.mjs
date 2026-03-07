// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://vgc.uy",

  // CLAVE: genera .html en vez de /index.html
  build: {
    format: "file",
  },

  trailingSlash: "never",

  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});