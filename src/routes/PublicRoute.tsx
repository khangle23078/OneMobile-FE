import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('@pages/auth/Login'));
const CategoryList = lazy(() => import('@pages/admin/category/CategoryList'));
const CategoryAdd = lazy(() => import('@pages/admin/category/CategoryAdd'));
const CategoryEdit = lazy(() => import('@pages/admin/category/CategoryEdit'));
const ProductList = lazy(() => import('@pages/admin/product/ProductList'))
const ProductAdd = lazy(() => import('@pages/admin/product/ProductAdd'))
const ProductEdit = lazy(() => import('@pages/admin/product/ProductEdit'))
const OrderList = lazy(() => import('@pages/admin/order/OrderList'))
const BannerList = lazy(() => import('@pages/admin/banner/BannerList'))
const BannerAdd = lazy(() => import('@pages/admin/banner/BannerAdd'))

export const router = createBrowserRouter([
  {
    path: '',
    element: <Login />,
  },
  {
    path: 'admin',
    element:
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ,
    children: [
      {
        path: 'category',
        children: [
          {
            path: '',
            element: <CategoryList />,
          },
          {
            path: 'add',
            element: <CategoryAdd />,
          },
          {
            path: 'edit/:id',
            element: <CategoryEdit />
          }
        ],
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            element: <ProductList />
          },
          {
            path: 'add',
            element: <ProductAdd />
          },
          {
            path: 'edit/:id',
            element: <ProductEdit />
          }
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            element: <OrderList />
          }
        ]
      },
      {
        path: 'banner',
        children: [
          {
            path: '',
            element: <BannerList />
          },
          {
            path: 'add',
            element: <BannerAdd />
          }
        ]
      }
    ],
  },
]);
