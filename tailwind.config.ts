import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#2FF3E0',
        yellow: '#F8D210',
        pink: '#FA26A0',
        red: '#F51720',
      },
    },
  },
  plugins: [],
};

export default config;
