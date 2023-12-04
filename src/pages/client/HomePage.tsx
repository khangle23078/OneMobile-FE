import { useGetProductsQuery } from '@/app/services/product'
import ProductCard from '@/components/ProductCard'
import Slide from '@/components/Slide'
import { Product } from '@/interfaces/product'
import { Card, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const HomePage: React.FC = () => {
  const { data: response } = useGetProductsQuery()

  const products = response?.data;
  return (
    <div className='py-4 bg-gray-100'>
      <div className='mx-auto max-w-7xl'>
        <Slide />
        <Card className='w-full my-4'>
          <Title level={4}>Danh sách sản phẩm</Title>
          <div className='grid items-center grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6'>
            {products ? products.map((product: Product) => {
              return <ProductCard product={product} key={product._id} />
            }) : null}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HomePage