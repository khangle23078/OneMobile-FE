import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { Product } from '@/interfaces/product'
import { Button, Card, Image, InputNumber, Table, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { decrementQuantity, incrementQuantity, removeItem } from '@/features/cartSlice'
import { formatMoney } from '@/utils/format'
const { Title } = Typography

const Cart: React.FC = () => {
  const { products, quantity } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  console.log(products);

  const totalPrice = products.reduce((total, product) => {
    return total + (product.quantity * product.origin_price);
  }, 0)

  const dataSource = products.map((product: Product, index: number) => {
    return {
      id: index + 1,
      _id: product._id,
      name: product.name,
      image: product?.image?.url,
      price: product.origin_price,
      product: product
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
      key: 'price',
      render: (price: number) => {
        return <p>{formatMoney.format(price)}</p>
      }
    },
    {
      title: 'Số lượng',
      dataIndex: 'product',
      key: 'quantity',
      render: (product: Product) => {
        return <div className='flex items-center'>
          <Button onClick={() => dispatch(incrementQuantity(product._id))}>+</Button>
          <InputNumber value={product.quantity} />
          <Button onClick={() => dispatch(decrementQuantity(product._id))}>-</Button>
        </div>
      }
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
        <Card className=''>
          <Title level={4}>Giỏ hàng</Title>
          <Table columns={colums} dataSource={dataSource} />
        </Card>
        <Card className='my-2'>
          <Title level={5}>Số lượng sản phẩm : {quantity || 0}</Title>
          <Title level={5}>Tổng tiền : {formatMoney.format(totalPrice) || 0}</Title>
          <Button type='primary'>Mua hàng</Button>
        </Card>
      </div>
    </div>
  )
}

export default Cart