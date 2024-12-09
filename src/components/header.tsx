import { Moon, Sun } from 'lucide-react';
import styled from 'styled-components';

import Button from '@/components/button';
import Container from '@/components/container';

import useColorTheme from '@/hooks/use-color-theme';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.element};
  padding-block: 1.5rem;
  box-shadow: 0rem 0.25rem 0.25rem ${({ theme }) => theme.color.shadow};
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoldButton = styled(Button)`
  font-weight: 600;
`;

const Header = () => {
  const { colorTheme, toggleTheme } = useColorTheme();

  return (
    <Wrapper>
      <FlexContainer>
        <Logo>Where in the world?</Logo>
        <BoldButton onClick={() => toggleTheme()}>
          {colorTheme === 'light' ? (
            <>
              Dark <Moon />
            </>
          ) : (
            <>
              Light <Sun />
            </>
          )}
        </BoldButton>
      </FlexContainer>
    </Wrapper>
  );
};

export default Header;
