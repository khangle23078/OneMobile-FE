import { useGetProductsByCategoryQuery } from '@/app/services/product'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/interfaces/product'
import { Card, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'

const { Title } = Typography

const Category: React.FC = () => {
  const { id } = useParams()
  const { data: response } = useGetProductsByCategoryQuery(id)

  const products = response?.data;

  return (
    <div className='py-2 bg-gray-200'>
      <Card className='h-screen mx-auto max-w-7xl'>
        <Title level={4}>Danh sách sản phẩm</Title>
        <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6'>
          {products?.length ? products?.map((product: Product) => {
            return <ProductCard product={product} />
          }) : <p>Không tìm thấy sản phẩm</p>}
        </div>
      </Card>
    </div>
  )
}

export default Category