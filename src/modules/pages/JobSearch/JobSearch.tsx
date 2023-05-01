import { useEffect, useState } from 'react';

import { useGetVacanciesQuery } from 'services';
import { Main } from 'styles/components';
import { Container, Content, StyledPagination, listStyles } from './jobSearch.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { Filters } from 'modules/components/Filters/Filters';
import { List } from 'modules/components/List/List';
import { CardVacancy } from 'modules/components/CardVacancy/CardVacancy';
import { countObjectsOnPage } from 'constants/pagination';
import type { IVacancies } from 'interfaces/api';

export const JobSearch = () => {
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const [activePage, setPage] = useState(1);
  const { data, isLoading, isFetching } = useGetVacanciesQuery({ page: activePage - 1 });

  useEffect(() => {
    if (data && data.objects) {
      const categories = data.objects.map(({ catalogues }) => catalogues[0].title);
      setDataSelect([...new Set(categories)]);
    }
  }, [data]);

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
      {(isLoading || isFetching) && <Loader />}
      <Main>
        <Container>
          <Filters dataSelect={dataSelect} />
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
