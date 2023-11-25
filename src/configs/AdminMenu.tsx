import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

export const adminMenus = [
  {
    label: (
      <a href="/admin/dashboard" className="text-white">
        Dashboard
      </a>
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
        label: <a href="/admin/category">Danh sách</a>,
      },
      {
        label: <a href="/admin/category/add">Thêm mới</a>,
      },
    ],
  },
  {
    label: (
      <a href="product" className="text-white">
        Sản phẩm
      </a>
    ),
    key: '5',
    icon: <DesktopOutlined />,
    children: [],
  },
  {
    label: (
      <a href="order" className="text-white">
        Đơn hàng
      </a>
    ),
    key: '8',
    icon: <ShoppingCartOutlined />,
    children: [],
  },
];
