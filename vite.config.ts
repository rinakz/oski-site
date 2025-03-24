import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },

  server: {
    allowedHosts: ["shiba-inu.pro"],
  },

  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "~styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler",
      },
    },
  },
});
