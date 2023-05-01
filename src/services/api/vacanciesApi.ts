import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { VacanciesResponse } from 'interfaces/api';
import { RootState } from 'store';

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
    getVacancies: builder.query<VacanciesResponse, null>({
      query: () => ({
        url: '/2.0/vacancies',
        headers: {
          'X-Api-App-Id': process.env.REACT_APP_CLIENT_SECRET,
          'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
        },
      }),
    }),
  }),
});
