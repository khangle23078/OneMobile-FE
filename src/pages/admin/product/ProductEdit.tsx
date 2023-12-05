import { useGetCategoriesQuery } from '@/app/services/category'
import { useEditproductMutation, useGetProductQuery } from '@/app/services/product'
import { editorConfig } from '@/configs/editor.config'
import { useAppSelector } from '@/hooks/hook'
import { Category } from '@/interfaces/category'
import { Iimage } from '@/interfaces/image'
import { Button, Form, Image, Input, InputNumber, Select, Space, Typography, Upload, message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UploadOutlined } from '@ant-design/icons'
import { useDeleteFileMutation } from '@/app/services/upload'
import { Product } from '@/interfaces/product'

const { Title } = Typography

const ProductEdit: React.FC = () => {
  const { id } = useParams()
  const [imageUrl, setImageUrl] = useState<Iimage | null>(null);
  const navigate = useNavigate()
  const [form] = useForm()
  const { accessToken } = useAppSelector((state) => state.auth)
  const { data: response } = useGetProductQuery(id);
  const { data } = useGetCategoriesQuery();
  const [deleteImage] = useDeleteFileMutation()
  const [editProduct, { isLoading }] = useEditproductMutation()

  useEffect(() => {
    if (response) {
      const product = response?.data;
      form.setFieldsValue({
        name: product.name,
        origin_price: product.origin_price,
        category: product.category,
        desc: product.desc,
        image: product.image
      })
      setImageUrl(form.getFieldValue('image'))
    }
    return () => {
      form.resetFields()
    }
  }, [response, form])

  const categories = data?.data.map((category: Category) => {
    return {
      label: category.name,
      value: category._id
    }
  })

  const handleRemoveImage = async (public_id: string | undefined) => {
    try {
      const response = await deleteImage({ public_id }).unwrap();
      message.success(response?.message)
    } catch (error: unknown) {
      message.success(error as string)
    }
  }

  const handleEditProduct = async (data: Partial<Product>) => {
    try {
      const response = await editProduct({ id, data }).unwrap()
      message.success(response.message)
      navigate('/admin/product')
    } catch (error: unknown) {
      message.error(error as string)
    }
  }

  return (
    <>
      <Title level={4}>Sửa sản phẩm</Title>
      <Form name="productEdit" form={form} layout="vertical" onFinish={handleEditProduct}>
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Giá sản phẩm"
          name="origin_price"
          rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}
        >
          <InputNumber min={1} className="max-w-[300px]" />
        </Form.Item>
        <Form.Item
          label="Danh mục sản phẩm"
          name="category"
          rules={[{ required: true, message: 'Vui lòng chọn manh mục' }]}
        >
          <Select options={categories} />
        </Form.Item>
        <Form.Item
          label="Mô tả sản phẩm"
          name="desc"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mô tả sản phẩm',
            },
          ]}
        >
          <ReactQuill modules={editorConfig.modules} formats={editorConfig.formats} />
        </Form.Item>
        <Form.Item
          label="Ảnh sản phẩm"
          name="image"
          getValueFromEvent={(event) => {
            const image = event?.fileList[0]?.response?.image;
            setImageUrl(image)
            return image;
          }}
        >
          <Upload
            name='image'
            className="avatar-uploader"
            action="https://onemobie.onrender.com/api/v1/file/upload"
            headers={{
              Authorization: `Bearer ${accessToken}`
            }}
            onRemove={() => handleRemoveImage(imageUrl?.public_id)}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh để tải lên</Button>
          </Upload >
        </Form.Item>
        <div className='py-2'>
          {<Image src={imageUrl?.url} width={300} height={300} />}
        </div>
        <Space>
          <Button type='primary' htmlType='submit' loading={isLoading}>Sửa sản phẩm</Button>
          <Link to={'/admin/product'}>
            <Button type='dashed'>Hủy</Button>
          </Link>
        </Space>
      </Form>
    </>
  )
}

export default ProductEdit