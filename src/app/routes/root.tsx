import { Outlet } from 'react-router';
import styled from 'styled-components';

import Container from '@/components/container';
import Header from '@/components/header';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const Root = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Wrapper>
  );
};

export default Root;
