import { Product } from '@/interfaces/product'
import { formatMoney } from '@/utils/format'
import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <Card className='w-[200px] h-[300px]'>
        <Link to={`/product/detail/${product._id}`}>
          <img src={product.image.url} className='object-cover w-[150px]' />
        </Link>
        <Link to={`/product/detail/${product._id}`} className='text-black'>
          <p>{product.name}</p>
        </Link>
        <p>{formatMoney.format(product.origin_price)}</p>
      </Card>
    </>
  )
}

export default ProductCard