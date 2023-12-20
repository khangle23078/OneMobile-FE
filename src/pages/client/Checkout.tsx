import { useCreateOrderMutation } from '@/app/services/order'
import { decrementQuantity, incrementQuantity, removeItem } from '@/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { Product } from '@/interfaces/product'
import { formatMoney } from '@/utils/format'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Card, Form, Image, Input, InputNumber, Table, Typography, message } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const Checkout: React.FC = () => {
  const { products, quantity } = useAppSelector((state) => state.cart)
  const { id } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [createOrder, { isLoading }] = useCreateOrderMutation()
  const navigate = useNavigate();

  const handleCheckoutOrder = async (data: any) => {
    try {
      const productId = products.map((product: Partial<Product>) => {
        return product._id
      })
      const orderData = {
        ...data,
        products: productId,
        product_count: quantity,
        total_price: totalPrice,
        user: id
      };
      const response = await createOrder(orderData).unwrap();
      message.success(response.message)
      navigate('/success')
    } catch (error) {
      message.error('Có lỗi xảy ra khi thanh toán')
    }
  }

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

  const columns = [
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
    <div className='bg-gray-200 '>
      <main className='max-w-6xl min-h-screen py-4 mx-auto'>
        <Card className='my-2'>
          <Title level={4}>Danh sách sản phẩm</Title>
          <Table columns={columns} dataSource={dataSource} rowKey={'_id'} pagination={false} />
          <div className='mt-2'>
            <p>Số lượng: {quantity} sản phẩm</p>
            <p>Tổng giá: {formatMoney.format(totalPrice)}</p>
          </div>
        </Card>
        <Card className='flex-1'>
          <Title level={4}>Thanh toán</Title>
          <Form name='checkoutForm' layout='vertical' onFinish={handleCheckoutOrder} >
            <Form.Item
              label='Họ và tên'
              name='full_name'
              rules={[{
                required: true,
                message: 'Vui lòng nhập họ và tên'
              }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='Số điện thoại'
              name='phone_number'
              rules={[{
                required: true,
                message: 'Vui lòng nhập số điện thoại'
              }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='Địa chỉ'
              name='address'
              rules={[{
                required: true,
                message: 'Vui lòng nhập địa chỉ'
              }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='Lưu ý'
              name='description'
              initialValue={null}
            >
              <Input.TextArea placeholder='Vui lòng nhập mô tả' />
            </Form.Item>
            <Button type='primary' htmlType='submit' loading={isLoading}>Thanh toán</Button>
          </Form>
        </Card>
      </main>
    </div>

  )
}

export default Checkout