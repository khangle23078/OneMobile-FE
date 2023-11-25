import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/PublicRoute';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { Spin } from 'antd';
import './styles/style.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Suspense fallback={<Spin />}>
        <RouterProvider router={router} />
      </Suspense>
    </PersistGate>
  </Provider>
);
