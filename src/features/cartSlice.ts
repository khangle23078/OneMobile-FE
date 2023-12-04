import { Product } from '@/interfaces/product';
import { createSlice } from '@reduxjs/toolkit'


interface CartState {
  products: Product[],
  quantity: number,
  totalPrice: number
}

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0
} as CartState

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existProduct = state.products.find((product) => product._id === payload._id)
      if (existProduct) {
        existProduct.quantity++
      } else {
        state.products.push(payload)
        state.quantity = 1
      }
    },
    removeItem: (state, { payload }) => {
      const removedItem = state.products.filter((product: Product) => product._id !== payload);
      state.products = removedItem;
      state.quantity--  
    }
  }
});

export const { addToCart, removeItem } = cartSlice.actions

export default cartSlice.reducer