import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { RootState } from 'store';
import { countObjectsOnPage } from 'constants/pagination';
import type {
  CataloguesResponse,
  IVacancies,
  VacanciesRequest,
  VacanciesResponse,
} from 'interfaces/api';

export const vacanciesApi = createApi({
  reducerPath: 'vacanciesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).persistedReducer.auth.accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getVacancies: builder.query<VacanciesResponse, VacanciesRequest>({
      query: ({ page, catalogues, payment_from, payment_to, keyword }) => ({
        url: '/2.0/vacancies',
        headers: {
          'X-Api-App-Id': process.env.REACT_APP_CLIENT_SECRET,
          'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
        },
        params: {
          published: 1,
          payment_from,
          payment_to,
          catalogues,
          count: countObjectsOnPage,
          page,
          keyword,
          no_agreement: 1,
        },
      }),
    }),
    getOneVacancy: builder.query<IVacancies, string>({
      query: (id) => ({
        url: `/2.0/vacancies/${id}`,
        headers: {
          'X-Api-App-Id': process.env.REACT_APP_CLIENT_SECRET,
          'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
        },
      }),
    }),
    getCatalogues: builder.query<CataloguesResponse[], null>({
      query: () => ({
        url: '/2.0/catalogues',
        headers: {
          'X-Api-App-Id': process.env.REACT_APP_CLIENT_SECRET,
          'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
        },
      }),
    }),
  }),
});
