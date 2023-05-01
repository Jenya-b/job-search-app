import { useEffect, useState } from 'react';

import { useGetVacanciesQuery } from 'services';
import { Main } from 'styles/components';
import { Container, Content } from './jobSearch.styled';
import { Loader } from 'modules/components/Loader/Loader';
import { Filters } from 'modules/components/Filters/Filters';

export const JobSearch = () => {
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const { data, isLoading } = useGetVacanciesQuery(null);

  useEffect(() => {
    if (data && data.objects) {
      const categories = data.objects.map(({ catalogues }) => catalogues[0].title);
      setDataSelect([...new Set(categories)]);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Loader />}
      <Main>
        <Container>
          <Filters dataSelect={dataSelect} />
          <Content></Content>
        </Container>
      </Main>
    </>
  );
};

export default JobSearch;
