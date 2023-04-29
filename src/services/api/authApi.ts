import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { AuthResponse } from 'interfaces/api';
import { setAuthData } from 'store/reducers/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getToken: builder.query<AuthResponse, null>({
      query: () => ({
        url: '/2.0/oauth2/password',
        params: {
          login: process.env.REACT_APP_LOGIN,
          password: process.env.REACT_APP_PASSWORD,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          hr: 0,
        },
        headers: {
          'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const {
            data: { access_token },
          } = await queryFulfilled;
          dispatch(setAuthData(access_token));
        } catch {
          throw new Error();
        }
      },
    }),
  }),
});
