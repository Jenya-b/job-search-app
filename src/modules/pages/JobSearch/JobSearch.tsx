import { useEffect } from 'react';

import { useGetVacanciesQuery } from 'services';
import { Main } from 'styles/components';

export const JobSearch = () => {
  const { data } = useGetVacanciesQuery(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <Main>Job Search</Main>;
};

export default JobSearch;
