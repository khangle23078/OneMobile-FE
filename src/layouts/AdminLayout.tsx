import { adminMenus } from '@/configs/AdminMenu';
import { Layout, Menu, Breadcrumb, theme, Button } from 'antd';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from './../assets/OneMobile.png'

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='flex items-center justify-center mx-1'>
          <img src={Logo} width={100} height={100} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={adminMenus} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='flex items-center justify-end'>
          <Link to={'/'}>
            <Button type='primary' className='mx-4'>Về trang chủ</Button>
          </Link>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
