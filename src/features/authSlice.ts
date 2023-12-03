import { User } from '@/interfaces/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  email: string | null;
  accessToken: string | null;
  role: string
}

const initialState = {
  email: null,
  accessToken: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, { payload }: PayloadAction<User>) => {
      state.email = payload?.email;
      state.accessToken = payload?.accessToken;
      state.role = payload.role
    },
  }
});

export const { setCredential } = authSlice.actions;

export default authSlice.reducer;
