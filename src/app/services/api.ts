import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders(headers) {
      headers.set('authorization', 'token');
    },
  }),
  endpoints: () => ({}),
});
