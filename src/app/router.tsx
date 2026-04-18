import { createBrowserRouter } from 'react-router-dom';

// Splash
import SplashScreen from '@/features/splash/SplashScreen';

// Landing
import LandingPage from '@/features/landing/LandingPage';

// Auth
import AuthLayout from '@/components/layout/AuthLayout';
import LoginPage from '@/features/auth/LoginPage';
import VerifyOtpPage from '@/features/auth/VerifyOtpPage';

// Admin
import AdminLayout from '@/features/admin/AdminLayout';
import OverviewPage from '@/features/admin/pages/OverviewPage';
import AnalyticsPage from '@/features/admin/pages/AnalyticsPage';
import AllPardnasPage from '@/features/admin/pages/AllPardnasPage';
import BankersPage from '@/features/admin/pages/BankersPage';
import ParticipantsPage from '@/features/admin/pages/ParticipantsPage';
import KycReviewPage from '@/features/admin/pages/KycReviewPage';
import AuditLogPage from '@/features/admin/pages/AuditLogPage';
import SettingsPage from '@/features/admin/pages/SettingsPage';

// Placeholder dashboards
import BankerLayout from '@/features/banker/BankerLayout';
import ParticipantLayout from '@/features/participant/ParticipantLayout';

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

  // Banker Dashboard (placeholder)
  {
    path: '/banker',
    element: <BankerLayout />,
  },

  // Participant Dashboard (placeholder)
  {
    path: '/participant',
    element: <ParticipantLayout />,
  },
]);
