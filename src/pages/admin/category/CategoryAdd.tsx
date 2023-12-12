import { useCreateCategoryMutation } from '@/app/services/category';
import { Button, Card, Form, Input, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const CategoryAdd = () => {
  const [createCategory, { isLoading, isSuccess, isError }] = useCreateCategoryMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: { name: string }) => {
    await createCategory(data);
    if (isSuccess) {
      message.success('Thêm mới thành công');
      navigate('/admin/category');
    }
    if (isError) {
      message.error('Có lỗi xảy ra khi thêm mới');
    }
    console.log(data);
  };

  return (
    <Card>
      <Title level={4}>Tạo danh mục</Title>
      <Form layout="vertical" name="categoryAdd" onFinish={onSubmit} initialValues={{ name: '' }}>
        <Form.Item
          label="Tên danh mục"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CategoryAdd;
