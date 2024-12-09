import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  color: {
    text: 'hsl(200 15% 8%)',
    background: 'hsl(0 0% 98%)',
    element: 'hsl(0 0% 100%)',
    input: 'hsl(0 0% 52%)',
    shadow: 'hsl(200 15% 8% / 10%)',
  },
};

export const darkTheme: DefaultTheme = {
  color: {
    text: 'hsl(0 0% 100%)',
    background: 'hsl(207 26% 17%)',
    element: 'hsl(209 23% 22%)',
    input: 'hsl(0 0% 100%)',
    shadow: 'hsl(44 0 0% / 10%)',
  },
};
