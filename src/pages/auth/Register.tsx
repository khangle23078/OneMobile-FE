import { useRegisterMutation } from '@/app/services/auth';
import { Button, Card, Form, Input, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

interface FormType {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [register, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()

  const handleRegister = async (values: FormType) => {
    try {
      const response = await register(values).unwrap()
      message.success(response.message)
      navigate('/login')
    } catch (error: unknown) {
      message.error(error as string)
    }


  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[400px]">
        <Title level={4} className="text-center">
          Đăng ký
        </Title>
        <Form name="registerForm" layout="vertical" onFinish={handleRegister}>
          <Form.Item<FormType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email' },
              { type: 'email', message: 'Vui lòng nhập đúng định đạng' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FormType>
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit" loading={isLoading}>
              Đăng ký
            </Button>
          </Form.Item>
          <div className="text-center">
            <span className="block">Hoặc</span>
            <a href="/login">đăng nhập</a>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
