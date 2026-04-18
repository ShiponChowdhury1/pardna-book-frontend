import { useState } from 'react';

export default function AdminTopbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header
      className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100"
      id="admin-topbar"
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-gray-400)"
            strokeWidth="2"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search users by name, email or userId..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 text-sm text-[var(--color-dark)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 focus:border-[var(--color-primary)]/30 transition-all"
            id="admin-search"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ml-6 flex-shrink-0">
          {/* Date Filter */}
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[var(--color-dark)] font-medium hover:bg-gray-50 transition-colors bg-white cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Last 30 Days
          </button>

          {/* Export Button */}
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--color-error)] hover:bg-red-600 transition-colors cursor-pointer border-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Export Data
          </button>

          {/* Profile Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
