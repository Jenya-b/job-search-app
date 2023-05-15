import { FormEvent, useEffect, useState, ChangeEvent } from 'react';

import { useGetCataloguesQuery, useLazyGetVacanciesQuery } from 'services';
import { Main } from 'styles/components';
import { Container, listStyles } from './VacanciesSearch.styled';
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
  const dispatch = useAppDispatch();
  const { favoritesVacancy } = useAppSelector(vacancySelector);
  const [fetchGetVacancies, { data, isLoading, isFetching }] = useLazyGetVacanciesQuery();
  const { data: catalogues, isLoading: isLoadingCatalogues } = useGetCataloguesQuery(null);

  useEffect(() => getVacancies(), [activePage]);

  useEffect(() => {
    if (!(activeSelector || minSalary || maxSalary || searchValue)) getVacancies();
  }, [activeSelector, maxSalary, minSalary, searchValue]);

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

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const resetFilters = () => {
    setActiveSelector(null);
    setMinSalary('');
    setMaxSalary('');
    setPage(1);
    setSearchValue('');
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
            resetFilters={resetFilters}
          />
          <InputSearch value={searchValue} onChange={handleChangeSearch} onClick={getVacancies} />
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
