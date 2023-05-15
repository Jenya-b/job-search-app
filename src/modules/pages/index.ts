import { lazy } from 'react';

const VacanciesSearch = lazy(() => import('modules/pages/VacanciesSearch/VacanciesSearch'));
const SelectedVacancies = lazy(() => import('modules/pages/SelectedVacancies/SelectedVacancies'));
const Signin = lazy(() => import('modules/pages/Signin/Signin'));

export { VacanciesSearch, SelectedVacancies, Signin };
