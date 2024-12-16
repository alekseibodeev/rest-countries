import { DefaultTheme } from 'styled-components';

export const LIGHT_THEME: DefaultTheme = {
  colors: {
    'body-content': 'hsl(200 15% 8%)',
    'body-background': 'hsl(0 0% 98%)',
    'base-content': 'hsl(200 15% 8%)',
    'base-background': 'hsl(0 0% 100%)',
    'neutral-100': 'hsl(0 0% 52%)',
    'shadow-50': 'hsl(200 15% 8% / 10%)',
  },
} as const;

export const DARK_THEME: DefaultTheme = {
  colors: {
    'body-content': 'hsl(0 0% 100%)',
    'body-background': 'hsl(207 26% 17%)',
    'base-content': 'hsl(0 0% 100%)',
    'base-background': 'hsl(209 23% 22%)',
    'neutral-100': 'hsl(0 0% 98%)',
    'shadow-50': 'hsl(44 0 0% / 10%)',
  },
} as const;

export const BREAKPOINT = {
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '82.5rem',
} as const;

export const FONT = {
  body: '"Nunito Sans", sans-serif',
} as const;

export const FONT_SIZE = {
  '275': '0.6875rem',
  '300': '0.75rem',
  '325': '0.8125',
  '350': '0.875rem',
  '400': '1rem',
  '450': '1.125rem',
  '500': '1.25rem',
  '550': '1.375rem',
  '600': '1.5rem',
  '750': '1.875rem',
  '800': '2rem',
  '900': '2.25rem',
  '1000': '2.5rem',
} as const;

export const FONT_WEIGHT = {
  regular: 300,
  medium: 600,
  bold: 800,
} as const;

export const BORDER_RADIUS = {
  '050': '0.125rem',
  '100': '0.25rem',
  '150': '0.375rem',
  '200': '0.5rem',
  '300': '0.75rem',
  '400': '1rem',
  '500': '1.25rem',
  '750': '1.875rem',
} as const;

export const BORDER_WIDTH = {
  '025': '0.0625rem',
  '050': '0.125rem',
  '100': '0.25rem',
} as const;

export const SPACING = {
  '025': '0.0625rem',
  '050': '0.125rem',
  '100': '0.25rem',
  '150': '0.375rem',
  '200': '0.5rem',
  '275': '0.6875rem',
  '300': '0.75rem',
  '325': '0.8125rem',
  '350': '0.875rem',
  '400': '1rem',
  '450': '1.125rem',
  '500': '1.25rem',
  '550': '1.375rem',
  '600': '1.5rem',
  '700': '1.75rem',
  '750': '1.875rem',
  '800': '2rem',
  '900': '2.25rem',
  '1000': '2.5rem',
  '1200': '3rem',
  '1400': '3.5rem',
  '1600': '4rem',
  '2000': '5rem',
  '2400': '6rem',
  '2800': '7rem',
  '3200': '8rem',
} as const;
