import { useGetOrdersQuery } from '@/app/services/order'
import { useGetProductsQuery } from '@/app/services/product'
import { Card, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const Dashboard: React.FC = () => {
  const { data: products } = useGetProductsQuery()
  const { data: orders } = useGetOrdersQuery()
  return (
    <div>
      <div className='flex gap-2'>
        <Card className='w-[300px]'>
          <Title level={5}>Số lượng sản phẩm</Title>
          <p>{products?.data.length}</p>
        </Card>
        <Card className='w-[300px]'>
          <Title level={5}>Số lượng đơn hàng</Title>
          <p>{orders?.data.length}</p>
        </Card>
        <Card className='w-[300px]'>
          <Title level={5}>Tổng doanh thu</Title>
          <p>0đ</p>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard