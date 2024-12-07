import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.element};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border: none;
  border-radius: 0.25em;
  padding: 1em 1.5em;
  box-shadow: 0em 0em 0.5em ${({ theme }) => theme.color.shadow};
  text-decoration: none;
  cursor: pointer;

  :focus-visible {
    outline: 0.125rem solid ${({ theme }) => theme.color.text};
  }
`;

export default Button;
