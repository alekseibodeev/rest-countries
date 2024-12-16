import { Moon, Sun } from 'lucide-react';
import styled from 'styled-components';

import Button from '@/components/button';
import Container from '@/components/container';

import useColorTheme from '@/hooks/use-color-theme';

import { color, fontSize, fontWeight, space } from '@/styles/helpers';

const Wrapper = styled.header`
  background-color: ${color('base-background')};
  padding-block: clamp(${space('350')}, 0.6709rem + 1.0204vw, ${space('600')});
  box-shadow: 0rem 0.25rem 0.25rem ${color('shadow-50')};
`;

const Logo = styled.span`
  font-size: clamp(
    ${fontSize('350')},
    0.6709rem + 1.0204vw,
    ${fontSize('600')}
  );
  font-weight: ${fontWeight('bold')};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled(Button)`
  font-size: clamp(
    ${fontSize('300')},
    0.6684rem + 0.4082vw,
    ${fontSize('400')}
  );
  font-weight: ${fontWeight('medium')};
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
