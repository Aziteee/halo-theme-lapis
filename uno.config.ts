import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  content: {
    filesystem: ["./templates/**/*.html", "./src/main.ts"],
  },
  rules: [
    [/^bgc-(.+)$/, ([, colorName]) => ({ "background-color": `var(--${colorName}-color)` })],
    [/^borderc-(.+)$/, ([, colorName]) => ({ "border-color": `var(--${colorName}-color)` })],
    [/^textc-(.+)$/, ([, colorName]) => ({ color: `var(--${colorName}-color)` })],
    [/^(.+)\$(.+)$/, ([, property, colorName]) => ({ [property]: `var(--${colorName}-color)` })],
    ["font-source-han-serif", { "font-family": "Cantarell,Lora,source-han-serif-tc,serif" }],
    [/^size-(\d+)$/, ([, d]) => ({ width: `${Number(d) / 4}rem`, height: `${Number(d) / 4}rem` })],
    ["shadow-button", { "box-shadow": "rgba(0, 0, 0, 0.10) 0px 4px 6px" }],
    [
      "shadow-card",
      {
        "box-shadow": `0px 0px 15px 0px rgba(0, 0, 0, 0.03),
                       0px 2px 30px 0px rgba(0, 0, 0, 0.08),
                       0px 0px 1px 0px rgba(0, 0, 0, 0.3)`,
      },
    ],
  ],
});
