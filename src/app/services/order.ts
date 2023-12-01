import { Response } from "@/interfaces/response";
import { api } from "./api";
import { Order } from "@/interfaces/order";

const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<Response<Order[]>, void>({
      query: () => '/order/getAll'
    })
  })
})

export const { useGetOrdersQuery } = orderApi