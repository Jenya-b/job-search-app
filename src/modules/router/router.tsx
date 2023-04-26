import { createBrowserRouter } from 'react-router-dom';

import { JobSearch, SelectedJobs } from 'modules/pages';
import { Layout } from 'modules/components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <JobSearch />,
      },
      {
        path: '/selected-jobs',
        element: <SelectedJobs />,
      },
    ],
  },
]);
