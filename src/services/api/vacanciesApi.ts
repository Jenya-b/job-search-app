import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { RootState } from 'store';
import { countObjectsOnPage } from 'constants/pagination';
import type { VacanciesResponse } from 'interfaces/api';

export const vacanciesApi = createApi({
  reducerPath: 'vacanciesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).persistedAuthReducer.accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getVacancies: builder.query<VacanciesResponse, { page: number }>({
      query: ({ page }) => ({
        url: '/2.0/vacancies',
        headers: {
          'X-Api-App-Id': process.env.REACT_APP_CLIENT_SECRET,
          'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
        },
        params: {
          published: 1,
          count: countObjectsOnPage,
          page,
        },
      }),
    }),
  }),
});
