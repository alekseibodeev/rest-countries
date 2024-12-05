import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import Input from '@/components/input';

const Wrapper = styled.form`
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 1.25em;
  color: ${({ theme }) => theme.color.input};
  transform: translateY(-50%);
  pointer-events: none;
`;

const SearchBar = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Wrapper
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <SearchIcon aria-hidden="true">
        <Search />
      </SearchIcon>
      <Input {...props} />
    </Wrapper>
  );
};

export default SearchBar;
