import { Dispatch, FormEvent, useEffect, useState } from 'react';

import {
  Wrapper,
  Title,
  Form,
  Subtitle,
  Button,
  NumInput,
  StyledSelect,
  ParamsWrapp,
  ResetBtn,
} from './Filters.styled';
import type { ISelectFilter } from 'interfaces/filters';
import type { CataloguesResponse } from 'interfaces/api';

interface FiltersProps {
  catalogues: CataloguesResponse[] | undefined;
  activeSelector: string | null;
  setActiveSelector: Dispatch<React.SetStateAction<string | null>>;
  applyFilters: (event: FormEvent<HTMLFormElement>) => void;
  minSalary: number | '' | undefined;
  setMinSalary: Dispatch<React.SetStateAction<number | '' | undefined>>;
  maxSalary: number | '' | undefined;
  setMaxSalary: Dispatch<React.SetStateAction<number | '' | undefined>>;
  resetFilters: () => void;
}

export const Filters = ({
  catalogues,
  activeSelector,
  setActiveSelector,
  applyFilters,
  minSalary,
  setMinSalary,
  maxSalary,
  setMaxSalary,
  resetFilters,
}: FiltersProps) => {
  const [dataSelect, setDataSelect] = useState<ISelectFilter[]>([]);

  useEffect(() => {
    if (catalogues) {
      setDataSelect(
        catalogues.map(({ key, title_rus }) => ({ value: String(key), label: title_rus }))
      );
    }
  }, [catalogues]);

  return (
    <div>
      <Wrapper>
        <Title>Фильтры</Title>
        <Form onSubmit={applyFilters}>
          <ParamsWrapp>
            <Subtitle>Отрасль</Subtitle>
            <StyledSelect
              placeholder="Выберете отрасль"
              value={activeSelector}
              onChange={setActiveSelector}
              data={dataSelect}
              data-elem="industry-select"
            />
          </ParamsWrapp>
          <ParamsWrapp>
            <Subtitle>Оклад</Subtitle>
            <NumInput
              placeholder="От"
              min={0}
              value={minSalary}
              onChange={setMinSalary}
              data-elem="salary-from-input"
            />
            <NumInput
              placeholder="До"
              min={0}
              value={maxSalary}
              onChange={setMaxSalary}
              data-elem="salary-to-input"
            />
          </ParamsWrapp>
          <Button data-elem="search-button">Применить</Button>
        </Form>
        <ResetBtn onClick={resetFilters}>Сбросить все</ResetBtn>
      </Wrapper>
    </div>
  );
};
