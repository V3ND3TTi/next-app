'use client';

import { LucideMoon, LucideSun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant='outline' size='icon' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <LucideSun
        className='
                    absolute h-4 w-4 rotate-90 scale-0 transition-transform
                    dark:-rotate-90 dark:scale-0
                '
      />
      <LucideMoon
        className='
                    absolute h-4 w-4 rotate-90 scale-0 transition-transform
                    dark:rotate-0 dark:scale-100
                '
      />

      <span className='sr-only'>Toggle Theme</span>
    </Button>
  );
};

export { ThemeSwitcher };
