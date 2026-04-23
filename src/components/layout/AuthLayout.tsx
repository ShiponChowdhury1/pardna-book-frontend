import { Outlet, useLocation } from 'react-router-dom';
import loginImg from '@/assets/login.png';

export default function AuthLayout() {
  const { pathname } = useLocation();
  const isRegister = pathname.includes('register');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] via-white to-purple-50/30 flex flex-col">

      {/* ── Top Logo Bar ── */}
      <div className="shrink-0 px-6 sm:px-8 py-5">
        <a href="/home" className="inline-flex items-center gap-2 no-underline">
          <svg width="30" height="30" viewBox="0 0 52 52" fill="none">
            <path
              d="M26 4C13.85 4 4 13.85 4 26s9.85 22 22 22"
              stroke="url(#auth-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="auth-grad" x1="4" y1="26" x2="26" y2="48">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="text-lg font-bold text-[var(--color-dark)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            PardnaBook
          </span>
        </a>
      </div>

      {/* ── Main Content ── */}
      <div className="flex-1 flex items-start lg:items-center justify-center px-4 sm:px-6 py-6 lg:py-10">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left: Auth Form — full column width, centered on mobile */}
          <div className="w-full animate-fade-in-up order-1">
            <div className="w-full max-w-lg mx-auto">
              <Outlet />
            </div>
          </div>

          {/* Right: Illustration — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:flex items-center justify-center animate-slide-in-right order-2">
            <div className="relative w-full max-w-lg">
              {/* Glow blobs */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-violet-200/25 rounded-full blur-3xl pointer-events-none" />

              {/* Illustration image */}
              <img
                src={loginImg}
                alt="PardnaBook security illustration"
                className="relative w-full rounded-3xl"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(108,43,217,0.12))' }}
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-6 bg-white rounded-2xl px-5 py-3 shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--color-dark)] leading-none">
                    {isRegister ? '2,400+ bankers' : 'Secure login'}
                  </p>
                  <p className="text-[10px] text-[var(--color-gray-400)] mt-0.5 leading-none">
                    {isRegister ? 'already managing pardnas' : 'OTP-verified access'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer note ── */}
      <div className="shrink-0 text-center pb-5">
        <p className="text-xs text-[var(--color-gray-400)]">
          © 2025 PardnaBook · No money is stored or processed
        </p>
      </div>
    </div>
  );
}
