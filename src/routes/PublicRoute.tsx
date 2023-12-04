import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import PrivateRoute from './PrivateRoute';
import MainLayout from '@/layouts/MainLayout';

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
const BannerEdit = lazy(() => import('@pages/admin/banner/BannerEdit'))
const HomePage = lazy(() => import('@pages/client/HomePage'))
const ProductDetail = lazy(() => import('@pages/client/ProductDetail'))
const NotFound = lazy(() => import('@pages/notfound/NotFound'))
const Register = lazy(() => import('@pages/auth/Register'));
const Cart = lazy(() => import('@pages/client/Cart'))

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'product/detail/:id',
        element: <ProductDetail />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
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
          },
          {
            path: 'edit/:id',
            element: <BannerEdit />
          }
        ]
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
