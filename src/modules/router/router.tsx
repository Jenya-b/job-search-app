import { createBrowserRouter } from 'react-router-dom';

import { VacanciesSearch, SelectedVacancies, Signin, Vacancy } from 'modules/pages';
import { Layout } from 'modules/components/Layout/Layout';
import { path } from './path';
import { RequireAuth } from 'hocs/RequireAuth';

export const router = createBrowserRouter([
  {
    path: path.home,
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <VacanciesSearch />,
      },
      {
        path: `${path.vacancy}/:vacancyId`,
        element: <Vacancy />,
      },
      {
        path: path.selectedVacancies,
        element: <SelectedVacancies />,
      },
    ],
  },
  {
    path: path.signin,
    element: <Signin />,
  },
]);
