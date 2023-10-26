import { useLoginMutation } from '@/app/services/auth';
import { useAppDispatch } from '@/app/store';
import { setCredential } from '@/features/authSlice';
import { Button, Card, Form, Input, Typography, message } from 'antd';

const { Title } = Typography;

interface FormType {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError, data }] = useLoginMutation();

  const onSubmit = async (values: FormType) => {
    await login(values);
    if (data) {
      message.success('Đăng nhập thành công');
      dispatch(setCredential(data));
    }

    if (isError) {
      message.error('Có lỗi xảy ra khi đăng nhập');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[400px]">
        <Title level={3} className="text-center">
          Đăng nhập
        </Title>
        <Form name="loginForm" layout="vertical" onFinish={onSubmit}>
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
              Đăng nhập
            </Button>
          </Form.Item>
          <div className="text-center">
            <span className="block">Hoặc</span>
            <a href="/register">Đăng ký</a>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
