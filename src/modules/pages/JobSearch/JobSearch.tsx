import { FormEvent, useEffect, useState } from 'react';

import { useGetCataloguesQuery, useLazyGetVacanciesQuery } from 'services';
import { Main } from 'styles/components';
import { Container, Content, StyledPagination, listStyles } from './jobSearch.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { Filters } from 'modules/components/Filters/Filters';
import { List } from 'modules/components/List/List';
import { CardVacancy } from 'modules/components/CardVacancy/CardVacancy';
import { countObjectsOnPage } from 'constants/pagination';
import type { IVacancies } from 'interfaces/api';

export const JobSearch = () => {
  const [activeSelector, setActiveSelector] = useState<string | null>(null);
  const [minSalary, setMinSalary] = useState<number | ''>();
  const [maxSalary, setMaxSalary] = useState<number | ''>();
  const [activePage, setPage] = useState(1);
  const [fetchGetVacancies, { data, isLoading, isFetching }] = useLazyGetVacanciesQuery();
  const { data: catalogues, isLoading: isLoadingCatalogues } = useGetCataloguesQuery(null);

  useEffect(() => {
    getVacancies();
  }, []);

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

  const renderItem = ({ profession, town, type_of_work, currency, payment_from }: IVacancies) => (
    <CardVacancy
      title={profession}
      salary={payment_from}
      address={town.title}
      type={type_of_work.title}
      currency={currency}
    />
  );

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
          <Content>
            {data && (
              <>
                <List
                  data={data.objects}
                  renderItem={renderItem}
                  renderEmpty={<></>}
                  styles={listStyles}
                />
                <StyledPagination
                  total={Math.ceil(data.total / countObjectsOnPage)}
                  value={activePage}
                  onChange={setPage}
                />
              </>
            )}
          </Content>
        </Container>
      </Main>
    </>
  );
};

export default JobSearch;
