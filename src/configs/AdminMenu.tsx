import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export const adminMenus = [
  {
    label: (
      <NavLink to="/admin/dashboard" className="text-white">
        Dashboard
      </NavLink>
    ),
    key: '1',
    icon: <PieChartOutlined />,
  },
  {
    label: <p>Danh mục</p>,
    key: '2',
    icon: <FileOutlined />,
    children: [
      {
        label: <NavLink to="/admin/category">Danh sách</NavLink>,
      },
      {
        label: <NavLink to="/admin/category/add">Thêm mới</NavLink>,
      },
    ],
  },
  {
    label: (
      <NavLink to="product" className="text-white">
        Sản phẩm
      </NavLink>
    ),
    key: '5',
    icon: <DesktopOutlined />,
    children: [
      {
        label: <NavLink to="/admin/product">Danh sách</NavLink>,
      },
    ],
  },
  {
    label: (
      <NavLink to="order" className="text-white">
        Đơn hàng
      </NavLink>
    ),
    key: '8',
    icon: <ShoppingCartOutlined />,
    children: [],
  },
];
