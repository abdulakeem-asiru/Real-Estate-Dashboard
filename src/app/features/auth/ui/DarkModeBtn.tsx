'use client'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeMode';
import { SunMoon } from 'lucide-react';

export default function DarkModeBtn() {
  const { switchTheme } = useContext(ThemeContext);

  return (
<SunMoon onClick={switchTheme} className='scale-[1.2] text-yellow-300 dark:text-black'/>
      
  );
}
