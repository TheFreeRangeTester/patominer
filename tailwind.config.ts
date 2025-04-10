import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryLight: "8ecae6",
        primary: "219ebc",
        darkBlue: "023047",
        warning: "ffb703",
        accent: "fb8500",
      },
    },
  },
  plugins: [],
};

export default config;
