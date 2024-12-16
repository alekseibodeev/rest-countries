import { LoaderCircle } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

import { fontWeight, space } from '@/styles/helpers';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space('400')};
  font-size: ${space('500')};
  font-weight: ${fontWeight('medium')};
`;

const rotation = keyframes`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`;

const Spinner = styled(LoaderCircle)`
  animation: ${rotation} 1000ms linear infinite;
`;

const BigSpinner = () => (
  <Wrapper>
    <Spinner size={64} />
    <p>Fetching data from the server</p>
  </Wrapper>
);

export default BigSpinner;
