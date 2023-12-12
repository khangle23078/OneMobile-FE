import { Response } from "@/interfaces/response";
import { api } from "./api";
import { Banner } from "@/interfaces/banner";

const bannerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBanners: build.query<Response<Banner[]>, void>({
      query: () => '/banner/getAll',
      providesTags: ['Banner']
    }),
    getBanner: build.query<Response<Banner>, string | undefined>({
      query: (id) => `/banner/getById/${id}`
    }),
    createBanner: build.mutation<Response<null>, Partial<Banner>>({
      query: (banner) => ({
        url: '/banner/create',
        method: 'POST',
        body: banner
      }),
      invalidatesTags: ['Banner']
    }),
    editBanner: build.mutation<Response<null>, { id: string | undefined, data: Partial<Banner> }>({
      query: (banner) => ({
        url: `/banner/updateById/${banner.id}`,
        method: 'PUT',
        body: banner.data
      }),
      invalidatesTags: ['Banner']
    }),
    deleteBanner: build.mutation<Response<null>, string>({
      query: (id) => ({
        url: `/banner/deleteById/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Banner']
    })
  })
})

export const {
  useGetBannersQuery,
  useGetBannerQuery,
  useCreateBannerMutation,
  useEditBannerMutation,
  useDeleteBannerMutation
} = bannerApi