import { Response } from "@/interfaces/response";
import { api } from "./api";
import { Order } from "@/interfaces/order";



const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<Response<Order[]>, void>({
      query: () => '/order/getAll',
      providesTags: ['Order']
    }),
    createOrder: build.mutation<Response<null>, Partial<Order>>({
      query: (order) => ({
        url: '/order/create',
        method: 'POST',
        data: order
      }),
    })
  })
})

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi