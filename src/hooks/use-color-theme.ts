import { useContext } from 'react';

import { ColorThemeContext } from '@/components/color-theme-provider';

const useColorTheme = () => {
  const context = useContext(ColorThemeContext);

  if (!context) {
    throw new Error('useColorTheme should be used inside ColorThemeProvider.');
  }

  return context;
};

export default useColorTheme;
