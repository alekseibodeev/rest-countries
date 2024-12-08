import { Ban } from 'lucide-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Message = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
`;

const ErrorFallback = ({ message }: { message: string }) => (
  <Wrapper>
    <Ban size={64} />
    <Message>{message}</Message>
  </Wrapper>
);

export default ErrorFallback;
