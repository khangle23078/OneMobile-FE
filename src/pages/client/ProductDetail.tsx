import { useGetProductQuery } from '@/app/services/product'
import { Button, Card, Image, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'

const { Title } = Typography

const ProductDetail: React.FC = () => {
  const { id } = useParams()
  const { data: product } = useGetProductQuery(id);

  return (
    <div className='py-4 bg-gray-200'>
      <div className='mx-auto max-w-7xl'>
        <Card>
          <Title level={4}>Chi tiết sản phẩm</Title>
          <div className='flex gap-[30px]'>
            <Image src={product?.data?.image.url} width={300} />
            <div className='right-side'>
              <div>
                <Title level={5}>Tên sản phẩm</Title>
                <p className='text-base text-dark'>{product?.data?.name}</p>
              </div>
              <div className='my-3'>
                <Title level={5}>Hãng</Title>
                <p className='text-base text-dark'>{product?.data.brand}</p>
              </div>
              <div>
                <Title level={5}>Giá sản phẩm</Title>
                <p className='text-base text-dark'>{product?.data.origin_price}</p>
              </div>
              <Button type='primary' icon={<ShoppingCartOutlined />} className='my-2'>Thêm vào giỏ hàng</Button>
            </div>
          </div>
        </Card>
        <Card className='my-2'>
          <Title level={5}>Đánh giá sản phẩm</Title>
          <p dangerouslySetInnerHTML={{ __html: product?.data.desc }}>
          </p>
        </Card>
      </div>
    </div>
  )
}

export default ProductDetail