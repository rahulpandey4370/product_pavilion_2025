
'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: 'dark',
  toggleTheme: () => { console.warn('ThemeProvider not initialized'); },
  setTheme: () => { console.warn('ThemeProvider not initialized'); },
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'productverse-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(storageKey) as Theme | null;
      if (storedTheme) {
        setThemeState(storedTheme);
      }
    } catch (e) {
      console.error('Error loading theme from localStorage', e);
    }
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.error('Error saving theme to localStorage', e);
    }
  }, [theme, storageKey]);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
      setThemeState(newTheme);
  }, []);


  const value = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined || context === initialState) {
    throw new Error('useTheme must be used within a ThemeProvider and after initialization');
  }
  return context;
};
