import RootLayout from '@/layout/RootLayout';
import AccountPage from '@/pages/AccountPage';
import CartPage from '@/pages/CartPage';
import { Home } from '@/pages/Home';
import ProductDetails from '@/pages/ProductDetails';
import ProductsPage from '@/pages/ProductsPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthLayout from '@/layout/AuthLayout';
import Login from '@/pages/auth/Login';
import Registration from '@/pages/auth/Registration';
import PublicRoute from './PublicRoute';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import CategoriesPage from '@/pages/CategoriesPage';
import CategoryDetail from '@/pages/CategoryDetail';
import AdminLayout from '@/layout/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminProtectedRoute from './AdminProtectedRoute';
import CategoryAdmin from '@/pages/admin/CategoryAdmin';
import MenuAdmin from '@/pages/admin/MenuAdmin';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'categories/:id', element: <CategoryDetail /> },
      { path: 'product/:id', element: <ProductDetails /> },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'account',
        element: (
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  // Auth layout
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      {
        path: 'login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: 'registration',
        element: (
          <PublicRoute>
            <Registration />
          </PublicRoute>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        ),
      },
    ],
  },

  // Admin Layout
  {
    path: '/admin',
    element: (
      <AdminProtectedRoute>
        <AdminLayout />
      </AdminProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'category',
        element: <CategoryAdmin />,
      },
      {
        path: 'menu',
        element: <MenuAdmin />,
      },
    ],
  },
]);
