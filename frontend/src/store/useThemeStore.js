import { create } from "zustand";

export const useThemeStore = create((set) => {
  const saved = localStorage.getItem("chat-theme") || "light";
  // Ensure HTML has the theme on first import (SSR-safe enough in Vite)
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", saved);
    document.documentElement.style.colorScheme = saved === "dark" ? "dark" : "light";
  }

  return {
    theme: saved,
    setTheme: (theme) => {
      localStorage.setItem("chat-theme", theme);
      // Instant DaisyUI update
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
      set({ theme });
    },
  };
});
