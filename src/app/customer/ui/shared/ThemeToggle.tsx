'use client'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeMode';
import { Switch } from "@/components/ui/switch"
import { Label } from '@/components/ui/label';
import { Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div className='flex items-center gap-4 ml-3'>
      <div className='flex gap-2 items-center'>
      <Moon />
      <Label htmlFor="thememode" className='text-[16px] font-normal'>{theme === 'light' ? 'Light' : 'Dark'}</Label>
      </div>
      <Switch id="thememode" onClick={switchTheme} className='scale-[1.2]'/>
    </div>
  );
}
