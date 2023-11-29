import { Response } from "@/interfaces/response";
import { api } from "./api";
import { Product } from "@/interfaces/product";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Response<Product[]>, void>({
      query: () => '/product/getAll',
      providesTags: ['Product']
    }),
    createProduct: build.mutation<Response<void>, Partial<Product>>({
      query: (product) => ({
        url: '/product/create',
        method: 'POST',
        body: product
      })
    })
  }),
})

export const { useGetProductsQuery, useCreateProductMutation } = productApi
