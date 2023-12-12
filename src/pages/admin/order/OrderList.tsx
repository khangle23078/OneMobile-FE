import { useGetOrdersQuery } from '@/app/services/order'
import { Order } from '@/interfaces/order'
import { Button, Card, Space, Table, Tag, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title } = Typography

const OrderList: React.FC = () => {
  const { data: response, isLoading } = useGetOrdersQuery()

  const colums = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Họ và tên',
      dataIndex: 'full_name',
      key: 'full_name'
    },
    {
      title: 'Sđt',
      dataIndex: 'phone_number',
      key: 'phone_number'
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Số lượng sp',
      dataIndex: 'product_quantity',
      key: 'product_quantity'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        return <Tag>{status}</Tag>
      }
    },
    {
      title: 'Thao tác',
      dataIndex: '_id',
      key: 'action',
      render: (_id: string) => {
        return <Space>
          <Link to={`/admin/order/detail/${_id}`}>
            <Button>Xem chi tiết</Button>
          </Link>
          <Button type='primary' danger>Xóa</Button>
        </Space>
      }
    }
  ]

  const dataSource = response?.data.map((order: Order, index: number) => {
    return {
      id: index + 1,
      _id: order._id,
      full_name: order.full_name,
      phone_number: order.phone_number,
      address: order.address,
      product_quantity: order.product_count,
      products: order.products,
      status: order.status,
    }
  })

  return (
    <Card>
      <Title level={4}>Danh sách đơn hàng</Title>
      <Table
        columns={colums}
        dataSource={dataSource}
        loading={isLoading}
        rowKey={'_id'}
      />
    </Card>
  )
}

export default OrderList