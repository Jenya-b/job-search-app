import { lazy } from 'react';

const JobSearch = lazy(() => import('modules/pages/JobSearch/JobSearch'));
const SelectedJobs = lazy(() => import('modules/pages/SelectedJobs/SelectedJobs'));

export { JobSearch, SelectedJobs };
