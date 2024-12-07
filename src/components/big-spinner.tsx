import { LoaderCircle } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
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
