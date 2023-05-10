import type { FlattenSimpleInterpolation } from 'styled-components';

import { List } from '../List/List';
import { Pagination } from '../Pagination/Pagination';
import type { IVacancies, VacanciesResponse } from 'interfaces/api';

interface VacanciesListProps {
  data: VacanciesResponse | undefined;
  renderItem: ({
    profession,
    town,
    type_of_work,
    currency,
    payment_from,
    payment_to,
    id,
  }: IVacancies) => JSX.Element;
  renderEmpty: JSX.Element;
  listStyles: FlattenSimpleInterpolation;
  countObjectsOnPage: number;
  activePage: number;
  setPage: (value: number) => void;
}

export const VacanciesList = ({
  data,
  renderItem,
  renderEmpty,
  listStyles,
  countObjectsOnPage,
  activePage,
  setPage,
}: VacanciesListProps) => {
  if (!data) return <></>;

  return (
    <div>
      <List
        data={data.objects}
        renderItem={renderItem}
        renderEmpty={renderEmpty}
        styles={listStyles}
      />
      <Pagination
        total={Math.ceil(data.total / countObjectsOnPage)}
        value={activePage}
        onChange={setPage}
      />
    </div>
  );
};
