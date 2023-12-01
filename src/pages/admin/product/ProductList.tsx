import { useDeleteProductMutation, useGetProductsQuery } from '@/app/services/product'
import { Product } from '@/interfaces/product'
import { Button, Image, Space, Popconfirm, Table, Typography, message, Tag } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const { Title } = Typography

const ProductList: React.FC = () => {
  const { data: response, isLoading } = useGetProductsQuery()
  const [deleteProduct] = useDeleteProductMutation()

  const handleDeleteProduct = async (_id: string) => {
    try {
      const response = await deleteProduct(_id).unwrap();
      message.success(response.message)
    } catch (error: unknown) {
      message.error(error as string)
    }

  }

  const comlumns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: "Tên sản phẩm",
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => {
        return <Image src={image} width={50} height={50} />
      }
    },
    {
      title: 'Giá sp',
      dataIndex: 'origin_price',
      index: 'origin_price'
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      index: 'category',
      render: (category: string) => {
        return <Tag>{category}</Tag>
      }
    },
    {
      title: 'Thao tác',
      dataIndex: '_id',
      index: 'action',
      render: (_id: string) => {
        return (
          <Space>
            <NavLink to={`/admin/product/edit/${_id}`}>
              <Button type='dashed'>Sửa</Button>
            </NavLink>
            <Popconfirm title='Xóa sản phẩm' onConfirm={() => handleDeleteProduct(_id)} okText='Xóa' cancelText='Không'>
              <Button type='primary' danger>Xóa</Button>
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  const dataSource = response?.data.map((product: Product, index: number) => {
    return {
      id: index + 1,
      _id: product._id,
      name: product.name,
      category: product.category?.name,
      image: product.image?.url,
      isHot: product.isHot,
      origin_price: product.origin_price,
      sale_pice: product.sale_pice,
      desc: product.desc,
    }
  })

  return (
    <>
      <Title level={3}>Danh sách sản phẩm</Title>
      <Table dataSource={dataSource} columns={comlumns} loading={isLoading} rowKey={'id'} />
    </>
  )
}

export default ProductList