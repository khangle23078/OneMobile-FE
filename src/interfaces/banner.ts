import { Image } from "./product";

export interface Banner {
  image: Image;
  _id: string;
  product_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
