// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  trailingSlash: "never",
  site: "https://vgc.uy", // <-- cambiá al dominio final cuando esté
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});