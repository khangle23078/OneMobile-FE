import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/PublicRoute';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Spin } from 'antd';
import './styles/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
