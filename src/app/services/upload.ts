import { Response } from "@/interfaces/response";
import { api } from "./api";

const uploadApi = api.injectEndpoints({
  endpoints: (build) => ({
    deleteFile: build.mutation<Response<void>, { public_id: string | undefined }>({
      query: (public_id) => ({
        url: '/file/destroy',
        method: 'POST',
        body: public_id
      })
    })
  })
})

export const { useDeleteFileMutation } = uploadApi;