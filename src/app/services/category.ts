import { Response } from '@/interfaces/response';
import { api } from './api';
import { Category } from '@/interfaces/category';

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Response<Category[] | undefined>, void>({
      query: () => '/category/getAll',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
