import styled from 'styled-components';

import {
  borderRadius,
  borderWidth,
  color,
  fontSize,
  fontWeight,
  space,
} from '@/styles/helpers';

const Input = styled.input`
  color: var(--input-color-content, ${color('base-content')});
  background-color: var(--input-color-background, ${color('base-background')});
  font-size: ${fontSize('350')};
  font-weight: ${fontWeight('medium')};
  border: none;
  border-radius: ${borderRadius('100')};
  padding-block: var(--input-padding-block, ${space('400')});
  padding-inline: var(--input-padding-inline, ${space('400')});
  box-shadow: 0rem 0rem 0.5rem ${color('shadow-50')};

  &:focus-visible {
    outline: ${borderWidth('050')} solid ${color('body-content')};
  }
`;

export default Input;
