export interface Order {
  _id: string,
  full_name: string,
  phone_number: string,
  address: string,
  status: string,
  product_count: number,
  total_price: number,
  products: (string | undefined)[],
  user: string | undefined,
}