import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'navy' | 'midnight' | 'emerald' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'navy',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme') as ThemeMode;
      // Default to high-contrast Deep Navy theme
      if (saved === 'navy' || saved === 'midnight' || saved === 'emerald') {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'navy';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
