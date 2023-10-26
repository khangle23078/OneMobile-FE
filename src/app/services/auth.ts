import { Response } from '@/interfaces/response';
import { api } from './api';
import { User } from '@/interfaces/user';

interface LoginRequest {
  email: string;
  password: string;
}

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Response<User>, LoginRequest>({
      query: (user: LoginRequest) => ({
        url: '/auth/login',
        method: 'post',
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
