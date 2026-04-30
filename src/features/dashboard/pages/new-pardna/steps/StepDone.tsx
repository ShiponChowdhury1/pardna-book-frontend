import type { NewPardnaFormData } from '../types';

interface Props {
  data: NewPardnaFormData;
  onGoHome: () => void;
}

export default function StepDone({ data, onGoHome }: Props) {
  const numParticipants = data.participants.filter((p) => p.name.trim()).length || 1;
  const contribution = Number(data.contributionAmount) || 0;
  const totalPot = contribution * numParticipants;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Celebration icon + heading */}
      <div className="flex flex-col items-center text-center pt-4 pb-2">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: '#E57432' }}>
          <span className="text-2xl">🎉</span>
        </div>
        <h2 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Pardna created!
        </h2>
        <p className="text-sm text-[#64748B] mt-1 max-w-sm">
          {data.name || 'Your pardna'} is ready. Invite the rest of your group whenever you're ready.
        </p>
      </div>

      {/* Summary card */}
      <section className="border border-gray-200 rounded-2xl p-5 space-y-4">
        <div>
          <h3 className="text-base font-bold text-[var(--color-dark)]">{data.name || 'Untitled Pardna'}</h3>
          {data.description && <p className="text-xs text-[#64748B] mt-0.5">{data.description}</p>}
        </div>

        {/* Total pot per round */}
        <div className="rounded-xl p-4" style={{ background: '#FFF7ED' }}>
          <p className="text-[10px] font-bold tracking-wider text-[#E57432] mb-1">TOTAL POT PER ROUND</p>
          <p className="text-3xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
            £{totalPot.toLocaleString()}
          </p>
          <p className="text-xs text-[#64748B] mt-0.5">
            £{contribution} × {numParticipants} participants
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <div className="flex items-center gap-2">
            <span className="text-[#E57432]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-[#64748B]">CONTRIBUTION</p>
              <p className="text-base font-bold text-[var(--color-dark)]">£{contribution}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E57432]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-[#64748B]">FREQUENCY</p>
              <p className="text-base font-bold text-[var(--color-dark)]">{data.frequency || '—'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E57432]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" /><circle cx="9" cy="7" r="4" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-[#64748B]">PARTICIPANTS</p>
              <p className="text-base font-bold text-[var(--color-dark)]">{numParticipants}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E57432]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-[#64748B]">STARTS</p>
              <p className="text-base font-bold text-[var(--color-dark)]">
                {data.startDate ? new Date(data.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: '2-digit' }) : '—'}
              </p>
            </div>
          </div>
        </div>

        {/* Total rounds */}
        <div className="flex items-center gap-2">
          <span className="text-[#E57432]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
          </span>
          <div>
            <p className="text-[10px] font-bold tracking-wider text-[#64748B]">TOTAL ROUNDS</p>
            <p className="text-sm font-bold text-[var(--color-dark)]">
              {numParticipants} rounds — one payout per participant
            </p>
          </div>
        </div>
      </section>

      {/* Draw order */}
      <section className="border border-gray-200 rounded-2xl p-5 space-y-3">
        <p className="text-[10px] font-bold tracking-wider text-[#64748B]">DRAW ORDER</p>
        <div className="space-y-0">
          {data.participants.filter((p) => p.name.trim()).map((p, i) => (
            <div key={p.id} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ background: '#E57432' }}
              >
                {i + 1}
              </span>
              <p className="text-sm font-medium text-[var(--color-dark)]">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to dashboard */}
      <button
        onClick={onGoHome}
        className="w-full py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all hover:bg-gray-100"
        style={{ background: '#FFFFFF', color: 'var(--color-dark)', border: '1px solid #E5E7EB' }}
      >
        Back to dashboard
      </button>
    </div>
  );
}
