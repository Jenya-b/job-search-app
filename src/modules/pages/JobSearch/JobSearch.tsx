import { FormEvent, useEffect, useState, useRef } from 'react';

import { useGetCataloguesQuery, useLazyGetVacanciesQuery } from 'services';
import { Main } from 'styles/components';
import { Container, listStyles } from './jobSearch.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { Filters } from 'modules/components/Filters/Filters';
import { CardVacancy } from 'modules/components/CardVacancy/CardVacancy';
import { countObjectsOnPage } from 'constants/pagination';
import { useAppDispatch, useAppSelector } from 'store';
import { vacancySelector } from 'store/selectors';
import { updateFavoritesVacancy } from 'store/reducers/vacancySlice';
import { VacanciesList } from 'modules/components/VacanciesList/VacanciesList';
import { InputSearch } from 'modules/components/InputSearch/InputSearch';
import type { IVacancies } from 'interfaces/api';

export const JobSearch = () => {
  const [activeSelector, setActiveSelector] = useState<string | null>(null);
  const [minSalary, setMinSalary] = useState<number | ''>();
  const [maxSalary, setMaxSalary] = useState<number | ''>();
  const [activePage, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const { favoritesVacancy } = useAppSelector(vacancySelector);
  const [fetchGetVacancies, { data, isLoading, isFetching }] = useLazyGetVacanciesQuery();
  const { data: catalogues, isLoading: isLoadingCatalogues } = useGetCataloguesQuery(null);

  useEffect(() => {
    getVacancies();
  }, [activePage, activeSelector, minSalary, maxSalary, searchValue]);

  const getVacancies = () => {
    fetchGetVacancies({
      page: activePage - 1,
      catalogues: activeSelector,
      payment_from: minSalary,
      payment_to: maxSalary,
      keyword: searchValue,
    });
  };

  const applyFilters = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getVacancies();
  };

  const renderItem = (props: IVacancies) => {
    const isFavorite = favoritesVacancy.map(({ id }) => id).includes(props.id);

    const addFavorites = () => {
      isFavorite
        ? dispatch(updateFavoritesVacancy(favoritesVacancy.filter(({ id }) => id != props.id)))
        : dispatch(updateFavoritesVacancy([props, ...favoritesVacancy]));
    };

    return (
      <CardVacancy
        title={props.profession}
        paymentFrom={props.payment_from}
        paymentTo={props.payment_to}
        address={props.town.title}
        type={props.type_of_work.title}
        currency={props.currency}
        addFavorites={addFavorites}
        isFavorite={isFavorite}
      />
    );
  };

  const onSearch = () => {
    if (!searchRef.current) return;
    setSearchValue(searchRef.current.value);
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
          <InputSearch searchRef={searchRef} onSearch={onSearch} />
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
