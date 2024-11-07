import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import fg from 'fast-glob';
import path from "path";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    UnoCSS(),
    {
      name: "watch-templates",
      async buildStart() {
        const files = await fg(["./templates/**/*.html"]);
        for (const file of files) {
          this.addWatchFile(file);
        }
      },
    },
  ],
  build: {
    outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "main",
      fileName: "main",
      formats: ["iife"],
    },
  },
});
