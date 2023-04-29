import { lazy } from 'react';

const JobSearch = lazy(() => import('modules/pages/JobSearch/JobSearch'));
const SelectedJobs = lazy(() => import('modules/pages/SelectedJobs/SelectedJobs'));
const Signin = lazy(() => import('modules/pages/Signin/Signin'));

export { JobSearch, SelectedJobs, Signin };
