// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://waschsalon-derendorf.de",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Nunito",
      cssVariable: "--font-body",
    },
    {
      provider: fontProviders.google(),
      name: "Baloo 2",
      cssVariable: "--font-heading",
    },
  ],
  integrations: [sitemap()],
});
