import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import Input from '@/components/input';

import { color, space } from '@/styles/helpers';

const Wrapper = styled.form`
  position: relative;

  --input-padding-inline: ${space('1600')};
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 1.25em;
  color: ${color('neutral-100')};
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
