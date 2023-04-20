import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "pages/about.html"),
        contact: resolve(__dirname, "pages/contact.html"),
        home: resolve(__dirname, "pages/home.html"),
        projects: resolve(__dirname, "pages/projects.html"),
      },
    },
    assetsDir: "assets",
  },
});
