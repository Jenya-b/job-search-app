import { useState } from 'react';

import {
  Wrapper,
  Title,
  Form,
  Subtitle,
  Button,
  NumInput,
  StyledSelect,
  ParamsWrapp,
} from './Filters.styled';

interface FiltersProps {
  dataSelect: string[];
}

export const Filters = ({ dataSelect }: FiltersProps) => {
  const [minSalary, setMinSalary] = useState<number | ''>();
  const [maxSalary, setMaxSalary] = useState<number | ''>();
  const [valueSelect, setValueSelect] = useState<string | null>(null);

  return (
    <div>
      <Wrapper>
        <Title>Фильтры</Title>
        <Form>
          <ParamsWrapp>
            <Subtitle>Отрасль</Subtitle>
            <StyledSelect
              placeholder="Выберете отрасль"
              value={valueSelect}
              onChange={setValueSelect}
              data={dataSelect}
            />
          </ParamsWrapp>
          <ParamsWrapp>
            <Subtitle>Оклад</Subtitle>
            <NumInput placeholder="От" min={0} value={minSalary} onChange={setMinSalary} />
            <NumInput placeholder="До" min={0} value={maxSalary} onChange={setMaxSalary} />
          </ParamsWrapp>
          <Button>Применить</Button>
        </Form>
      </Wrapper>
    </div>
  );
};
