import { Moon, Sun } from 'lucide-react';
import styled from 'styled-components';

import Button from '@/components/button';
import Container from '@/components/container';

import useColorTheme from '@/hooks/use-color-theme';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.element};
  padding-block: clamp(0.875rem, 0.6709rem + 1.0204vw, 1.5rem);
  box-shadow: 0rem 0.25rem 0.25rem ${({ theme }) => theme.color.shadow};
`;

const Logo = styled.span`
  font-size: clamp(0.875rem, 0.6709rem + 1.0204vw, 1.5rem);
  font-weight: 800;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled(Button)`
  font-size: clamp(0.75rem, 0.6684rem + 0.4082vw, 1rem);
  font-weight: 600;
  box-shadow: none;
`;

const Header = () => {
  const { colorTheme, toggleTheme } = useColorTheme();

  return (
    <Wrapper>
      <HeaderContainer>
        <Logo>Where in the world?</Logo>
        <HeaderButton onClick={() => toggleTheme()}>
          {colorTheme === 'light' ? (
            <>
              <Moon /> Dark Mode
            </>
          ) : (
            <>
              <Sun /> Light Mode
            </>
          )}
        </HeaderButton>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
