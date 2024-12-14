import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  BREAKPOINT,
  FONT,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '@/styles/constants';
import { Colors } from '@/styles/styled';

export const createCssProps = <T extends object>(
  tokens: T,
  prefix: `--${string}`,
) => {
  return Object.entries(tokens)
    .map(([key, value]) => {
      const cssVariableKey =
        prefix === '--' ? `${prefix}${key}` : `${prefix}-${key}`;
      return `${cssVariableKey}:${value}`;
    })
    .join(';')
    .concat(';');
};

const createSelector = <T>(prefix: `--${string}`) => {
  return (key: T) => {
    return `var(${prefix}-${key})`;
  };
};

export const color = createSelector<keyof Colors>('--color');

export const breakpoint =
  createSelector<keyof typeof BREAKPOINT>('--breakpoint');

export const font = createSelector<keyof typeof FONT>('--ff');

export const fontSize = createSelector<keyof typeof FONT_SIZE>('--fs');

export const fontWeight = createSelector<keyof typeof FONT_WEIGHT>('--fw');

export const borderRadius = createSelector<keyof typeof BORDER_RADIUS>('--br');

export const borderWidth = createSelector<keyof typeof BORDER_WIDTH>('--bw');

export const space = createSelector<keyof typeof SPACING>('--space');
