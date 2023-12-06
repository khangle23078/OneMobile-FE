export interface Order {
  _id: string,
  full_name: string,
  phone_number: string,
  address: string,
  status: string,
  product_count: number,
  total_pice: number,
  products: (string | undefined)[],
  user_id: string | undefined,
}