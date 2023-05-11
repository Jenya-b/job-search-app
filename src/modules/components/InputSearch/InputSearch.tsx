import { MutableRefObject } from 'react';

import { searchIcon } from 'constants/images';
import { StyledInput, Wrapper, Button } from './InputSearch.styled';

interface InputSearchProps {
  searchRef: MutableRefObject<HTMLInputElement | null>;
  onSearch: () => void;
}

export const InputSearch = ({ searchRef, onSearch }: InputSearchProps) => (
  <Wrapper>
    <StyledInput
      ref={searchRef}
      placeholder="Введите название вакансии"
      icon={<img src={searchIcon} />}
    />
    <Button onClick={onSearch}>Поиск</Button>
  </Wrapper>
);
