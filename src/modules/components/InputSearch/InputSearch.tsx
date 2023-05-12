import { ChangeEvent } from 'react';

import { searchIcon } from 'constants/images';
import { StyledInput, Wrapper, Button } from './InputSearch.styled';

interface InputSearchProps {
  onClick: () => void;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ value, onChange, onClick }: InputSearchProps) => (
  <Wrapper>
    <Button onClick={onClick}>Поиск</Button>
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder="Введите название вакансии"
      icon={<img src={searchIcon} style={{ paddingLeft: '10px' }} />}
    />
  </Wrapper>
);
