import { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { DARK_THEME, LIGHT_THEME } from '@/styles/constants';

type ColorTheme = 'dark' | 'light';

type ColorThemeContext = {
  colorTheme: ColorTheme;
  toggleTheme: () => void;
};

export const ColorThemeContext = createContext<ColorThemeContext | null>(null);

const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('light');

  const toggleTheme = () => {
    setColorTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={colorTheme === 'light' ? LIGHT_THEME : DARK_THEME}>
      <ColorThemeContext.Provider value={{ colorTheme, toggleTheme }}>
        {children}
      </ColorThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ColorThemeProvider;
