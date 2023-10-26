import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const Login = lazy(() => import('@pages/auth/Login'));

export const router = createBrowserRouter([
  {
    path: '',
    element: <Login />,
  },
]);
