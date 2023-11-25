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
        method: 'POST',
        body: data,
      }),
    }),
    deleteCategory: build.mutation<void, string | undefined>({
      query: (id) => ({
        url: `/category/deleteById/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Category']
    })
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation, useDeleteCategoryMutation } = categoryApi;
