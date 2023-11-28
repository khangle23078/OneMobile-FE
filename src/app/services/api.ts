import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://onemobie.onrender.com/api/v1/',
    prepareHeaders(headers, { getState }) {
      const accessToken = (getState() as RootState).auth.accessToken;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['Category', 'Product'],
});
