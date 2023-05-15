import { authApi } from './api/authApi';
import { vacanciesApi } from './api/vacanciesApi';

export const { useGetTokenQuery } = authApi;

export const { useLazyGetVacanciesQuery, useGetCataloguesQuery, useGetOneVacancyQuery } =
  vacanciesApi;
