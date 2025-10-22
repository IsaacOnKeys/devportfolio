import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://isaaconkeys.github.io",
  base: "/devportfolio/",
  vite: { plugins: [tailwindcss()] },
});
