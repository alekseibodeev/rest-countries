import { createGlobalStyle } from 'styled-components';

import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  BREAKPOINT,
  FONT,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '@/styles/constants';
import { createCssProps } from '@/styles/helpers';

const GlobalStyles = createGlobalStyle`
  :root {
    ${({ theme }) => createCssProps(theme.colors, '--color')}
    ${createCssProps(BREAKPOINT, '--breakpoint')}
    ${createCssProps(FONT, '--ff')}
    ${createCssProps(FONT_SIZE, '--fs')}
    ${createCssProps(FONT_WEIGHT, '--fw')}
    ${createCssProps(BORDER_RADIUS, '--br')}
    ${createCssProps(BORDER_WIDTH, '--bw')}
    ${createCssProps(SPACING, '--space')}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: unset;
    padding: unset;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  body {
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    line-height: 1.1;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

   img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyles;
