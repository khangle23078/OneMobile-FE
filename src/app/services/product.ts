import { Response } from '@/interfaces/response';
import { api } from './api';
import { Product } from '@/interfaces/product';

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Response<Product[]>, void>({
      query: () => '/product/getAll',
      providesTags: ['Product'],
    }),
    getProduct: build.query<Response<Product>, string | undefined>({
      query: (_id) => `/product/getById/${_id}`,
    }),
    createProduct: build.mutation<Response<void>, Partial<Product>>({
      query: (product) => ({
        url: '/product/create',
        method: 'POST',
        body: product,
      }),
    }),
    editproduct: build.mutation<Response<void>, { id: string | undefined; data: Partial<Product> }>({
      query: (product) => ({
        url: `/product/updateById/${product.id}`,
        method: 'PUT',
        body: product.data,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: build.mutation<Response<null>, string>({
      query: (_id) => ({
        url: `/product/deleteById/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useEditproductMutation,
  useDeleteProductMutation,
} = productApi;
