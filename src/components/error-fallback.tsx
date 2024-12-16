import { Ban } from 'lucide-react';
import styled from 'styled-components';

import { fontSize, fontWeight, space } from '@/styles/helpers';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${space('400')};
`;

const Message = styled.h1`
  font-size: ${fontSize('600')};
  font-weight: ${fontWeight('bold')};
  text-align: center;
`;

const ErrorFallback = ({ message }: { message: string }) => (
  <Wrapper>
    <Ban size={64} />
    <Message>{message}</Message>
  </Wrapper>
);

export default ErrorFallback;
