export default function BankerLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
      <div className="text-center animate-fade-in-up">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4-4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[var(--color-dark)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Banker Dashboard
        </h1>
        <p className="text-[var(--color-gray-400)] text-sm">
          Coming Soon — This dashboard is under development.
        </p>
      </div>
    </div>
  );
}
