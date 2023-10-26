import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AdminLayout from '@/layouts/AdminLayout';

const Login = lazy(() => import('@pages/auth/Login'));
const CategoryList = lazy(() => import('@pages/admin/category/CategoryList'));

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
            index: true,
            element: <CategoryList />,
          },
        ],
      },
    ],
  },
]);
