const steps = [
  {
    number: '01',
    title: 'Add Your Members',
    description: 'Invite your pardna participants. Each member gets their own profile to track contributions and payouts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Track Contributions',
    description: 'Record each payment as it comes in. PardnaBook timestamps everything and updates balances automatically.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7v10M12 7v10M16 7v10" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Manage Payouts',
    description: 'When it\'s time for a payout, the system shows you exactly who gets what. Keep a transparent financial history.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Build the Record',
    description: 'Every pardna cycle builds a transparent, clean traceable record — ready to start the next cycle smoothly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[var(--color-bg)]" id="how-it-works">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How it works
          </h2>
          <p className="text-[var(--color-gray-500)]">
            Managing and running your pardna with trust, in just 4 simple steps.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[var(--color-primary)]/30 via-[var(--color-primary)]/60 to-[var(--color-primary)]/30 hidden sm:block" />

          <div className="space-y-10 stagger-children">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-6 animate-fade-in-up opacity-0 group"
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform z-10">
                  <span className="text-sm font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-md)] transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[var(--color-primary)]">{step.icon}</span>
                    <h3 className="text-lg font-semibold text-[var(--color-dark)]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-gray-500)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
