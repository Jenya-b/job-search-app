import { MutableRefObject } from 'react';

import { searchIcon } from 'constants/images';
import { StyledInput, Wrapper, Button } from './InputSearch.styled';

interface InputSearchProps {
  searchRef: MutableRefObject<HTMLInputElement | null>;
  onSearch: () => void;
}

export const InputSearch = ({ searchRef, onSearch }: InputSearchProps) => (
  <Wrapper>
    <Button onClick={onSearch}>Поиск</Button>
    <StyledInput
      ref={searchRef}
      placeholder="Введите название вакансии"
      icon={<img src={searchIcon} style={{ paddingLeft: '10px' }} />}
    />
  </Wrapper>
);
