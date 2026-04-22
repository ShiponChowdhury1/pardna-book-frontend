import { createBrowserRouter } from 'react-router-dom';

// Splash
import SplashScreen from '@/features/splash/SplashScreen';

// Landing
import LandingPage from '@/features/landing/LandingPage';

// Auth
import AuthLayout from '@/components/layout/AuthLayout';
import LoginPage from '@/features/auth/LoginPage';
import RegisterPage from '@/features/auth/RegisterPage';
import VerifyOtpPage from '@/features/auth/VerifyOtpPage';

// Admin
import AdminLayout from '@/features/admin/AdminLayout';
import OverviewPage     from '@/features/admin/pages/overview';
import AnalyticsPage    from '@/features/admin/pages/analytics';
import AllPardnasPage   from '@/features/admin/pages/pardnas';
import BankersPage      from '@/features/admin/pages/bankers';
import ParticipantsPage from '@/features/admin/pages/participants';
import KycReviewPage    from '@/features/admin/pages/kyc';
import AuditLogPage     from '@/features/admin/pages/audit';
import SettingsPage     from '@/features/admin/pages/settings';


export const router = createBrowserRouter([
  // Splash Screen (entry point)
  {
    path: '/',
    element: <SplashScreen />,
  },

  // Landing Page
  {
    path: '/home',
    element: <LandingPage />,
  },

  // Authentication
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'verify-otp',
        element: <VerifyOtpPage />,
      },
    ],
  },

  // Admin Dashboard
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />,
      },
      {
        path: 'pardnas',
        element: <AllPardnasPage />,
      },
      {
        path: 'bankers',
        element: <BankersPage />,
      },
      {
        path: 'participants',
        element: <ParticipantsPage />,
      },
      {
        path: 'kyc',
        element: <KycReviewPage />,
      },
      {
        path: 'audit',
        element: <AuditLogPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);
