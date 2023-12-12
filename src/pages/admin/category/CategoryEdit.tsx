import { useEditCategoryMutation, useGetCategoryQuery } from "@/app/services/category";
import { Button, Card, Form, Input, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { Category } from '@/interfaces/category';
import { useEffect } from "react";

const { Title } = Typography;

const CategoryEdit = () => {
  const { id } = useParams()
  const { data: response } = useGetCategoryQuery(id)
  const [editCategory, { isLoading }] = useEditCategoryMutation()
  const [form] = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (response) {
      const category = response.data
      form.setFieldsValue({
        name: category.name
      })
    }
    return () => {
      form.resetFields()
    }
  }, [response, form])

  const handleEditCategory = async (data: Partial<Category>) => {
    try {
      const response = await editCategory({ id, data }).unwrap()
      message.success(response.message)
      navigate('/admin/category')
    } catch (error) {
      message.error('Có lỗi xảy ra khi sửa danh mục')
    }
  }

  return (
    <Card>
      <Title level={4}>Sửa danh mục</Title>
      <Form layout="vertical" form={form} name="categoryEdit" onFinish={handleEditCategory}>
        <Form.Item
          label="Tên danh mục"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Sửa
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default CategoryEdit