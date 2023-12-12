import { Response } from '@/interfaces/response';
import { api } from './api';
import { Category } from '@/interfaces/category';

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Response<Category[]>, void>({
      query: () => '/category/getAll',
      providesTags: ['Category'],
    }),
    getCategory: build.query<Response<Category>, string | undefined>({
      query: (id) => `/category/getById/${id}`,
      providesTags: ['Category'],
    }),
    createCategory: build.mutation<Response<null>, { name: string }>({
      query: (data: { name: string }) => ({
        url: '/category/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Category']
    }),
    editCategory: build.mutation<Response<null>, { id: string | undefined; data: Partial<Category> }>({
      query: (category) => ({
        url: `/category/updateById/${category.id}`,
        method: 'PUT',
        body: category.data
      }),
      invalidatesTags: ['Category']
    })
    ,
    deleteCategory: build.mutation<Response<null>, string | undefined>({
      query: (id) => ({
        url: `/category/deleteById/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
