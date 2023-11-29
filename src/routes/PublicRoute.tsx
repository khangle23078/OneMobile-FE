import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AdminLayout from '@/layouts/AdminLayout';

const Login = lazy(() => import('@pages/auth/Login'));
const CategoryList = lazy(() => import('@pages/admin/category/CategoryList'));
const CategoryAdd = lazy(() => import('@pages/admin/category/CategoryAdd'));
const CategoryEdit = lazy(() => import('@pages/admin/category/CategoryEdit'));
const ProductList = lazy(() => import('@pages/admin/product/ProductList'))
const ProductAdd = lazy(() => import('@pages/admin/product/ProductAdd'))

export const router = createBrowserRouter([
  {
    path: '',
    element: <Login />,
  },
  {
    path: 'admin',
    element: <AdminLayout />,
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
          }
        ]
      }
    ],
  },
]);
