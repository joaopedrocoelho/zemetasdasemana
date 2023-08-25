import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|amber)-.+/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /text-(red|green|blue|amber)-.+/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nougat: ["var(--font-nougat)", ...fontFamily.sans],
        lilita: ["var(--font-lilita)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
