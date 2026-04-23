import { Outlet } from 'react-router-dom';
import DashboardTopBar from './components/DashboardTopBar';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <DashboardTopBar />

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}
