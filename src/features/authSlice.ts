import { User } from '@/interfaces/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  id: string | null;
  email: string | null;
  accessToken: string | null;
  role: string | null
}

const initialState = {
  id: null,
  email: null,
  accessToken: null,
  role: null
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, { payload }: PayloadAction<User>) => {
      state.email = payload?.email;
      state.accessToken = payload?.accessToken;
      state.role = payload.role
      state.id = payload._id
    },
    logout: (state) => {
      state.accessToken = null
      state.email = null
      state.role = null
      state.id = null
    }
  }
});

export const { setCredential, logout } = authSlice.actions;

export default authSlice.reducer;
