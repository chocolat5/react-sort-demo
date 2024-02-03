import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
  },
  plugins: [react(), legacy({ targets: ["defaults"] })],
  resolve: {
    alias: {
      "@/src": "/src",
    },
  },
});
