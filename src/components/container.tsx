import styled, { css } from 'styled-components';

import { BREAKPOINT } from '@/styles/constants';
import { breakpoint, space } from '@/styles/helpers';

type ContainerProps = {
  $size?: keyof typeof BREAKPOINT;
  $fullHeight?: boolean;
};

const Container = styled.div<ContainerProps>`
  max-width: ${({ $size = 'lg' }) => breakpoint($size)};
  padding-inline: ${space('400')};
  margin-inline: auto;

  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      height: 100%;
    `}
`;

export default Container;
