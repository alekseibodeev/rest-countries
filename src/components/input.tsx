import styled from 'styled-components';

const Input = styled.input`
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 4rem;
  box-shadow: 0rem 0rem 0.5rem ${({ theme }) => theme.color.shadow};

  &:focus-visible {
    outline: 0.125rem solid ${({ theme }) => theme.color.text};
  }
`;

export default Input;
