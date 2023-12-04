import { Product } from '@/interfaces/product';
import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  products: Product[],
  quantity: number,
}

const initialState = {
  products: [],
  quantity: 0,
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
        state.products.push({ ...payload, quantity: 1 })
        state.quantity++
      }
    },
    removeItem: (state, { payload }) => {
      const removedItem = state.products.filter((product: Product) => product._id !== payload);
      state.products = removedItem;
      if (removeItem.length === 1) {
        state.quantity = 1
      } else {
        state.quantity--
      }
    },
    incrementQuantity: (state, { payload }) => {
      const existProduct: any = state.products.find((product: Product) => product._id === payload);
      existProduct.quantity++
    },
    decrementQuantity: (state, { payload }) => {
      const existProduct = state.products.find((product: Product) => product._id === payload)
      if (existProduct) {
        if (existProduct.quantity === 1) {
          existProduct.quantity === 1
        } else {
          existProduct.quantity--
        }
      }
    }
  }
});

export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions

export default cartSlice.reducer