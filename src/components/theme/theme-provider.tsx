import { ThemeProvider as BaseThemeProvider } from 'next-themes';
import React from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <BaseThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={true}
      // disableTransitionOnChange
    >
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
