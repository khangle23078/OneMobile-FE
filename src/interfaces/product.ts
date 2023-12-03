export interface Product {
  _id: string
  name: string
  image: Image
  quantity: number
  brand: string
  origin_price: number
  sale_pice: number
  desc: any
  isHot: boolean
  category: Category
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Category {
  _id: string,
  name: string
}

export interface Image {
  plubic_id: string
  url: string
}