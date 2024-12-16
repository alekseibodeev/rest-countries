import styled from 'styled-components';

import { borderWidth, color } from '@/styles/helpers';

const Button = styled.button`
  color: var(--button-color-content, ${color('base-content')});
  background-color: var(--button-color-background, ${color('base-background')});
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border: none;
  border-radius: var(--button-border-radius, 0.25em);
  padding-block: var(--button-padding-block, 1em);
  padding-inline: var(--button-padding-inline, 1.5em);
  box-shadow: 0em 0em 0.5em ${color('shadow-50')};
  text-decoration: none;
  cursor: pointer;

  :focus-visible {
    outline: ${borderWidth('050')} solid ${color('body-content')};
  }
`;

export default Button;
