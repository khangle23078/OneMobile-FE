import { Product } from '@/interfaces/product';
import { createSlice } from '@reduxjs/toolkit'


interface CartState {
  products: Product[],
  quantity: number
}

const initialState = {

} as CartState

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: () => {
    }
  }
});

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer