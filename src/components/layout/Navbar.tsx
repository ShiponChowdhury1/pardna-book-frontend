import { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '@/assets/logos/navbarLogo.svg';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
      id="navbar"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center no-underline">
            <img src={navbarLogo} alt="PardnaBook logo" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/home#features"
              className="group relative text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-primary)] transition-colors no-underline py-1"
            >
              Features
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </a>
            <a
              href="/home#how-it-works"
              className="group relative text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-primary)] transition-colors no-underline py-1"
            >
              How it Works
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </a>
            <a
              href="/home#testimonials"
              className="group relative text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-primary)] transition-colors no-underline py-1"
            >
              Trust
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/auth/login"
              className="text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-primary)] transition-colors no-underline"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all no-underline"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fade-in-down">
            <div className="flex flex-col gap-3">
              <a href="/home#features" className="text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-primary)] px-2 py-2 no-underline" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="/home#how-it-works" className="text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-primary)] px-2 py-2 no-underline" onClick={() => setMobileOpen(false)}>How it Works</a>
              <a href="/home#testimonials" className="text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-primary)] px-2 py-2 no-underline" onClick={() => setMobileOpen(false)}>Trust</a>
              <Link
                to="/auth/login"
                className="text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)]/30 px-5 py-2.5 rounded-lg text-center no-underline hover:bg-[var(--color-primary)]/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="text-sm font-medium text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] px-5 py-2.5 rounded-lg text-center no-underline"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
