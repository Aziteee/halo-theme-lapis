import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  content: {
    filesystem: ["./templates/**/*.html", "./src/main.ts"],
  },
  rules: [
    [/^bgc-(.+)$/, ([, colorName]) => ({ "background-color": `var(--${colorName}-color)` })],
    [/^borderc-(.+)$/, ([, colorName]) => ({ "border-color": `var(--${colorName}-color)` })],
    [/^textc-(.+)$/, ([, colorName]) => ({ color: `var(--${colorName}-color)` })],
    [/^(.+)\$(.+)$/, ([, property, colorName]) => ({ [property]: `var(--${colorName}-color)` })],
    ["font-zhongsong", { "font-family": '"STZhongsong"' }],
    [/^size-(\d+)$/, ([, d]) => ({ width: `${Number(d) / 4}rem`, height: `${Number(d) / 4}rem` })],
  ],
});
