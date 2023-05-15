import { useEffect, useState } from 'react';

import { Main } from 'styles/components';
import { Container } from './SelectedVacancies.styled';
import { useAppDispatch, useAppSelector } from 'store';
import { vacancySelector } from 'store/selectors';
import { List } from 'modules/components/List/List';
import { Pagination } from 'modules/components/Pagination/Pagination';
import { countObjectsOnPage } from 'constants/pagination';
import { updateFavoritesVacancy } from 'store/reducers/vacancySlice';
import { CardVacancy } from 'modules/components/CardVacancy/CardVacancy';
import { NotFound } from 'modules/components/NotFound/NotFound';
import { listStyles } from '../VacanciesSearch/VacanciesSearch.styled';
import type { IVacancies } from 'interfaces/api';

export const SelectedJobs = () => {
  const [totalVacancy, setTotalVacancy] = useState<number>(0);
  const [activePage, setPage] = useState(1);
  const [selectedVacancy, setSelectedVacancy] = useState<IVacancies[]>([]);
  const { favoritesVacancy } = useAppSelector(vacancySelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTotalVacancy(favoritesVacancy.length);
  }, [favoritesVacancy]);

  useEffect(() => {
    if (!totalVacancy) return;

    setSelectedVacancy(
      favoritesVacancy.slice((activePage - 1) * countObjectsOnPage, activePage * countObjectsOnPage)
    );
  }, [activePage, favoritesVacancy, totalVacancy]);

  const renderItem = (props: IVacancies) => {
    const addFavorites = () =>
      dispatch(updateFavoritesVacancy(favoritesVacancy.filter(({ id }) => id != props.id)));

    return (
      <CardVacancy
        title={props.profession}
        paymentFrom={props.payment_from}
        paymentTo={props.payment_to}
        address={props.town.title}
        type={props.type_of_work.title}
        currency={props.currency}
        addFavorites={addFavorites}
        isFavorite={true}
      />
    );
  };

  if (!favoritesVacancy.length) return <NotFound />;

  return (
    <Main>
      <Container>
        <List
          data={selectedVacancy}
          renderItem={renderItem}
          renderEmpty={<></>}
          styles={listStyles}
        />
        <Pagination
          total={Math.ceil(totalVacancy / countObjectsOnPage)}
          value={activePage}
          onChange={setPage}
        />
      </Container>
    </Main>
  );
};

export default SelectedJobs;
