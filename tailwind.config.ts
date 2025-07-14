import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        // Colores para modo oscuro
        dark: {
          bg: "#0f0f0f",
          surface: "#1a1a1a",
          surfaceHover: "#2a2a2a",
          border: "#333333",
          text: "#e5e5e5",
          textSecondary: "#a0a0a0",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
