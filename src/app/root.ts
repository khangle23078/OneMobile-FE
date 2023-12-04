import authSlice from "@/features/authSlice";
import { combineReducers } from "redux";
import { api } from "./services/api";
import cartSlice from "@/features/cartSlice";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  cart: cartSlice
})