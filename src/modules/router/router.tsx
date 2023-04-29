import { createBrowserRouter } from 'react-router-dom';

import { JobSearch, SelectedJobs, Signin } from 'modules/pages';
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
        element: <JobSearch />,
      },
      {
        path: path.selectedJobs,
        element: <SelectedJobs />,
      },
    ],
  },
  {
    path: path.signin,
    element: <Signin />,
  },
]);
