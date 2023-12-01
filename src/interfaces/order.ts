import { Product } from "./product"

export interface Order {
  _id: string
  full_name: string
  phone_number: number
  address: string
  status: string
  product_count: number
  total_pice: number
  products: Product[]
  user_id: string
  createdAt: string
  updatedAt: string
  __v: number
}