import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  content: {
    filesystem: ["./templates/**/*.html", "./src/main.ts"],
  },
});
