import { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/constants/theme';

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
    <ThemeProvider theme={colorTheme === 'light' ? lightTheme : darkTheme}>
      <ColorThemeContext.Provider value={{ colorTheme, toggleTheme }}>
        {children}
      </ColorThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ColorThemeProvider;
