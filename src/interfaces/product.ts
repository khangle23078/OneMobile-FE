export interface Product {
  _id: string
  name: string
  image: Image
  quantity: number
  brand: string
  origin_price: number
  sale_pice: number
  desc: string
  isHot: boolean
  category_id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Image {
  plubic_id: string
  url: string
}