import { useGetBannersQuery } from '@/app/services/banner'
import { Banner } from '@/interfaces/banner'
import { Button, Image, Popconfirm, Space, Table, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title } = Typography

const BannerList: React.FC = () => {
  const { data: response, isLoading } = useGetBannersQuery()

  const comlumns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => {
        return <Image src={image} width={100} height={100} />
      }
    },
    {
      title: 'Link sản phẩm',
      dataIndex: 'product_id',
      key: 'product_id'
    },
    {
      title: 'Thao tác',
      dataIndex: '_id',
      key: 'action',
      render: (_id: string) => {
        return <>
          <Space>
            <Link to={`/admin/banner/edit/${_id}}`}>
              <Button type='dashed'>Sửa</Button>
            </Link>
            <Popconfirm title='Bạn có chắc muốn xóa không?' okText='Xóa' cancelText='Không'>
              <Button type='primary' danger>Xóa</Button>
            </Popconfirm>
          </Space>
        </>
      }
    }
  ]

  const dataSource = response?.data.map((banner: Banner, index: number) => {
    return {
      id: index + 1,
      _id: banner._id,
      image: banner.image?.url,
      product_id: banner.product_id
    }
  })


  return (
    <>
      <Title level={4}>Danh sách banner</Title>
      <Table columns={comlumns} dataSource={dataSource} loading={isLoading} rowKey={'_id'} />
    </>
  )
}

export default BannerList