import { Response } from '@/interfaces/response';
import { api } from './api';
import { Category } from '@/interfaces/category';

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Response<Category[] | undefined>, void>({
      query: () => '/category/getAll',
      providesTags: ['Category'],
    }),
    createCategory: build.mutation<void, { name: string }>({
      query: (data: { name: string }) => ({
        url: '/category/create',
        method: 'post',
        body: data,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi;
