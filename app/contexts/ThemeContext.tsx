"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Estado inicial consistente - siempre "light" en el servidor
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente después del montaje
    setMounted(true);

    // Obtener el tema guardado en localStorage o usar la preferencia del sistema
    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      const initialTheme = savedTheme || systemTheme;

      // Solo actualizar si es diferente al estado inicial
      if (initialTheme !== theme) {
        setTheme(initialTheme);
        document.documentElement.classList.toggle(
          "dark",
          initialTheme === "dark"
        );
      }
    } catch (error) {
      // Fallback si localStorage no está disponible
      console.warn("Could not access localStorage:", error);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.warn("Could not save theme to localStorage:", error);
    }

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const value = {
    theme,
    toggleTheme,
    mounted,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
