import { useGetCategoriesQuery } from '@/app/services/category';
import { useCreateProductMutation } from '@/app/services/product';
import { useDeleteFileMutation } from '@/app/services/upload';
import { editorConfig } from '@/configs/editor.config';
import { useAppSelector } from '@/hooks/hook';
import { Category } from '@/interfaces/category';
import { Iimage } from '@/interfaces/image';
import { Product } from '@/interfaces/product';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, Image, Input, InputNumber, Select, Typography, Upload, message } from 'antd';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const ProductAdd: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<Iimage | null>(null);
  const navigate = useNavigate()
  const { accessToken } = useAppSelector((state) => state.auth)
  const { data: response } = useGetCategoriesQuery();
  const [createProduct] = useCreateProductMutation()
  const [deleteImage] = useDeleteFileMutation();

  const handleRemoveImage = async (public_id: string | undefined) => {
    try {
      const response = await deleteImage({ public_id }).unwrap();
      message.success(response?.message)
    } catch (error: unknown) {
      message.success(error as string)
    }
  }

  const handleAddProduct = async (data: Partial<Product>) => {
    try {
      const response = await createProduct(data).unwrap();
      message.success(response.message);
      navigate('/admin/product')
    } catch (error: unknown) {
      message.error(error as string)
    }
  };

  const categories = response?.data?.map((category: Category) => {
    return {
      label: category.name,
      value: category._id
    }
  })

  return (
    <Card>
      <Title level={4}>Thêm mới sản phẩm</Title>
      <Form name="productAdd" layout="vertical" onFinish={handleAddProduct}>
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
        <div>
          {imageUrl ? <Image src={imageUrl?.url} width={300} height={300} /> : null}
        </div>
        <Button type="primary" htmlType="submit">
          Thêm mới
        </Button>
      </Form>
    </Card>
  );
};

export default ProductAdd;
