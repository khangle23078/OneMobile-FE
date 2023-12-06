import authSlice from "@/features/authSlice";
import cartSlice from "@/features/cartSlice";
import { combineReducers } from "redux";
import { api } from "./services/api";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  cart: cartSlice
})