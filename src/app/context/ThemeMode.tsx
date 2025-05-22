'use client'

import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  switchTheme: () => {},
});

interface ThemeModeProp {
  children?: ReactNode;
}

function ThemeMode({ children }: ThemeModeProp) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme ?? "light";
    setTheme(initialTheme);
    document.body.classList.add(initialTheme);
    if (!savedTheme) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeMode;
export { ThemeContext };
