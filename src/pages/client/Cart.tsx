import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { Product } from '@/interfaces/product'
import { Card, Image, Table, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { removeItem } from '@/features/cartSlice'
const { Title } = Typography

const Cart: React.FC = () => {
  const { products } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const dataSource = products.map((product: Product, index: number) => {
    return {
      id: index + 1,
      _id: product._id,
      name: product.name,
      image: product.image.url,
      price: product.origin_price,
      quantity: product.quantity
    }
  })

  const colums = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Tên sp',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => {
        return <Image src={image} width={100} />
      }
    },
    {
      title: 'Giá sp',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Thao tác',
      dataIndex: '_id',
      key: '_id',
      render: (_id: string) => {
        return (
          <DeleteOutlined
            className='text-3xl text-red-500'
            onClick={() => dispatch(removeItem(_id))}
          />
        )
      }
    }
  ]
  return (
    <div className='py-4 bg-gray-100'>
      <div className='h-screen max-w-6xl mx-auto'>
        <Card className='flex-1'>
          <Title level={4}>Giỏ hàng</Title>
          <Table columns={colums} dataSource={dataSource} />
        </Card>
      </div>
    </div>
  )
}

export default Cart