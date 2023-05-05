import { FormEvent, useEffect, useState } from 'react';

import { useGetCataloguesQuery, useLazyGetVacanciesQuery } from 'services';
import { Main } from 'styles/components';
import { Container, listStyles } from './jobSearch.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { Filters } from 'modules/components/Filters/Filters';
import { CardVacancy } from 'modules/components/CardVacancy/CardVacancy';
import { countObjectsOnPage } from 'constants/pagination';
import { useAppDispatch, useAppSelector } from 'store';
import { vacancySelector } from 'store/selectors';
import { updateFavoriteId } from 'store/reducers/vacancySlice';
import { VacanciesList } from 'modules/components/VacanciesList/VacanciesList';
import type { IVacancies } from 'interfaces/api';

export const JobSearch = () => {
  const [activeSelector, setActiveSelector] = useState<string | null>(null);
  const [minSalary, setMinSalary] = useState<number | ''>();
  const [maxSalary, setMaxSalary] = useState<number | ''>();
  const [activePage, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { favoriteIds } = useAppSelector(vacancySelector);
  const [fetchGetVacancies, { data, isLoading, isFetching }] = useLazyGetVacanciesQuery();
  const { data: catalogues, isLoading: isLoadingCatalogues } = useGetCataloguesQuery(null);

  useEffect(() => {
    getVacancies();
  }, [activePage, activeSelector, minSalary, maxSalary]);

  const getVacancies = () => {
    fetchGetVacancies({
      page: activePage - 1,
      catalogues: activeSelector,
      payment_from: minSalary,
      payment_to: maxSalary,
    });
  };

  const applyFilters = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getVacancies();
  };

  const renderItem = ({
    profession,
    town,
    type_of_work,
    currency,
    payment_from,
    payment_to,
    id,
  }: IVacancies) => {
    const addFavorites = () => {
      favoriteIds.includes(id)
        ? dispatch(updateFavoriteId(favoriteIds.filter((item) => item != id)))
        : dispatch(updateFavoriteId([id, ...favoriteIds]));
    };

    return (
      <CardVacancy
        title={profession}
        paymentFrom={payment_from}
        paymentTo={payment_to}
        address={town.title}
        type={type_of_work.title}
        currency={currency}
        addFavorites={addFavorites}
        isFavorite={favoriteIds.includes(id)}
      />
    );
  };

  return (
    <>
      {(isLoading || isFetching || isLoadingCatalogues) && <Loader />}
      <Main>
        <Container>
          <Filters
            catalogues={catalogues}
            activeSelector={activeSelector}
            setActiveSelector={setActiveSelector}
            applyFilters={applyFilters}
            minSalary={minSalary}
            maxSalary={maxSalary}
            setMinSalary={setMinSalary}
            setMaxSalary={setMaxSalary}
          />
          <VacanciesList
            data={data}
            renderItem={renderItem}
            renderEmpty={<></>}
            countObjectsOnPage={countObjectsOnPage}
            activePage={activePage}
            setPage={setPage}
            listStyles={listStyles}
          />
        </Container>
      </Main>
    </>
  );
};

export default JobSearch;
