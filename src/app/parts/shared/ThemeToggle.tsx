'use client'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeMode';

export default function ThemeToggle() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <button onClick={switchTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
