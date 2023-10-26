import { Response } from '@/interfaces/response';
import { User } from '@/interfaces/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  email: string | null;
  accessToken: string | null;
}

const initialState = {
  email: null,
  accessToken: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, { payload }: PayloadAction<Response<User>>) => {
      const userData = payload.data;
      state.email = userData?.email;
      state.accessToken = userData?.accessToken;
      localStorage.setItem('user', JSON.stringify(userData));
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher;
  },
});

export const { setCredential } = authSlice.actions;

export default authSlice.reducer;
