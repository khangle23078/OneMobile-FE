import { useEditCategoryMutation, useGetCategoryQuery } from "@/app/services/category";
import { Button, Form, Input, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { Category } from '@/interfaces/category';

const { Title } = Typography;

const CategoryEdit = () => {
  const { id } = useParams()
  const { data: response } = useGetCategoryQuery(id)
  const [editCategory, { isLoading, isSuccess }] = useEditCategoryMutation()
  const [form] = useForm()
  const navigate = useNavigate()

  if (response) {
    const category = response.data
    form.setFieldsValue({
      name: category.name
    })
  }


  const handleEditCategory = async (data: Partial<Category>) => {
    await editCategory({ id, data })
    if (isSuccess) {
      message.success('Sửa danh mục thành công')
      navigate('/admin/category')
    }
  }


  return (
    <>
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
    </>
  )
}

export default CategoryEdit