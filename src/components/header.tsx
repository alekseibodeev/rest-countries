import styled from 'styled-components';

import Container from '@/components/container';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.element};
  padding-block: 1.5rem;
  box-shadow: 0rem 0.25rem 0.25rem ${({ theme }) => theme.color.shadow};
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Where in the world?</Logo>
      </Container>
    </Wrapper>
  );
};

export default Header;
