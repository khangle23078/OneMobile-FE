import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://onemobie.onrender.com/api/v1/',
    prepareHeaders(headers) {
      const accessToken = JSON.parse(localStorage.getItem('user') as string).accessToken;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
    },
  }),
  endpoints: () => ({}),
});
