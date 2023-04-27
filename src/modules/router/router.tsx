import { createBrowserRouter } from 'react-router-dom';

import { JobSearch, SelectedJobs } from 'modules/pages';
import { Layout } from 'modules/components/Layout/Layout';
import { path } from './path';

export const router = createBrowserRouter([
  {
    path: path.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <JobSearch />,
      },
      {
        path: path.selectedJobs,
        element: <SelectedJobs />,
      },
    ],
  },
]);
