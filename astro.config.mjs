// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://isaaconkeys.github.io",
  base: "/Cocoa_Prices/",
  vite: {
    plugins: [tailwindcss()],
  },
});
