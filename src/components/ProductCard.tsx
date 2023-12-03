import { Product } from '@/interfaces/product'
import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <Card className='w-[200px] h-[300px]'>
        <img src={product.image.url} className='object-cover w-[150px]' />
        <p>{product.name}</p>
        <p>{product.origin_price}</p>
      </Card>
    </Link>
  )
}

export default ProductCard