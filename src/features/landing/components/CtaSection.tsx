import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#3B1A7E]" />

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-white" />
        <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-white" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-white" />
        <div className="absolute bottom-10 right-1/3 w-3 h-3 rounded-full bg-white" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Ready to run your pardna properly?
        </h2>

        <p className="text-lg text-purple-200 mb-10 animate-fade-in-up max-w-xl mx-auto" style={{ animationDelay: '100ms' }}>
          No more messy notes or missed payments. Just trust, records, and accountability.
        </p>

        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Link
            to="/auth/login"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--color-primary)] bg-white rounded-xl hover:bg-gray-50 hover:shadow-xl transition-all no-underline group"
          >
            Create Your Pardna Account
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <p className="text-sm text-purple-300/60 mt-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Free to get started • No credit card required
        </p>
      </div>
    </section>
  );
}
