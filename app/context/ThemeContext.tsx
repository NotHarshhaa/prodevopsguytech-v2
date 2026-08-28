'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';
  const isDark = activeTheme === 'dark';

  const toggleTheme = React.useCallback(() => {
    // Determine the opposite theme
    const current = resolvedTheme || theme || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    
    // Explicitly update DOM class immediately
    if (typeof document !== 'undefined') {
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    setTheme(next);
  }, [resolvedTheme, theme, setTheme]);

  return {
    theme: activeTheme,
    setTheme,
    toggleTheme,
    isDark,
    mounted
  };
}