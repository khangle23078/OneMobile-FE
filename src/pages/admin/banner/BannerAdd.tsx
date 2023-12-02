import { Button, Form, Image, Input, Typography, Upload, message } from 'antd'
import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/hooks/hook'
import { Banner } from '@/interfaces/banner'
import { useDeleteFileMutation } from '@/app/services/upload'
import { Iimage } from '@/interfaces/image'
import { useCreateBannerMutation } from '@/app/services/banner'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const BannerAdd: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<Iimage | null>(null);
  const navigate = useNavigate()
  const { accessToken } = useAppSelector((state) => state.auth)
  const [deleteImage] = useDeleteFileMutation()
  const [addBanner, { isLoading }] = useCreateBannerMutation()

  const handleRemoveImage = async (public_id: string | undefined) => {
    try {
      const response = await deleteImage({ public_id }).unwrap();
      message.success(response?.message)
    } catch (error: unknown) {
      message.success(error as string)
    }
  }

  const handleAddBanner = async (data: Partial<Banner>) => {
    try {
      const response = await addBanner(data).unwrap();
      message.success(response?.message)
      navigate('/admin/banner')
    } catch (error: unknown) {
      message.success(error as string)
    }
  }

  return (
    <>
      <Title level={4}>Thêm mới banner</Title>
      <Form layout="vertical" onFinish={handleAddBanner}>
        <Form.Item
          label="Ảnh sản phẩm"
          name='image'
          getValueFromEvent={(event) => {
            const image = event?.fileList[0]?.response?.image;
            setImageUrl(image)
            return image;
          }}>
          <Upload
            name='image'
            action="https://onemobie.onrender.com/api/v1/file/upload"
            headers={{
              Authorization: `Bearer ${accessToken}`
            }}
            onRemove={() => handleRemoveImage(imageUrl?.public_id)}
          >
            <Button icon={<UploadOutlined />}>Thêm ảnh</Button>
          </Upload>
        </Form.Item>
        <div>
          {imageUrl ? <Image src={imageUrl?.url} width={300} height={300} /> : null}
        </div>
        <Form.Item label="Link sản phẩm" name='product_link'>
          <Input />
        </Form.Item>
        <Button type='primary' htmlType='submit' loading={isLoading}>Thêm mới</Button>
      </Form>
    </>
  )
}

export default BannerAdd