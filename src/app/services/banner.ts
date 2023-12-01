import { Response } from "@/interfaces/response";
import { api } from "./api";
import { Banner } from "@/interfaces/banner";

const bannerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBanners: build.query<Response<Banner[]>, void>({
      query: () => '/banner/getAll'
    })
  })
})

export const { useGetBannersQuery } = bannerApi