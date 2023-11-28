import { Response } from "@/interfaces/response";
import { api } from "./api";
import { Product } from "@/interfaces/product";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Response<Product[]>, void>({
      query: () => '/product/getAll'
    })
  }),
})

export const { useGetProductsQuery } = productApi
