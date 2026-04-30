import type { NewPardnaFormData } from '../types';

interface Props {
  data: NewPardnaFormData;
  onChange: (d: Partial<NewPardnaFormData>) => void;
}

function formatDate(dateStr: string, weeksOffset: number): string {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  d.setDate(d.getDate() + weeksOffset * 7);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function frequencyWeeks(freq: string): number {
  if (freq === 'Weekly') return 1;
  if (freq === 'Fortnightly') return 2;
  return 4; // Monthly
}

export default function StepReview({ data, onChange }: Props) {
  const numParticipants = data.participants.filter((p) => p.name.trim()).length || 1;
  const contribution = Number(data.contributionAmount) || 0;
  const totalPot = contribution * numParticipants;
  const weeks = frequencyWeeks(data.frequency);

  const moveParticipant = (index: number, direction: 'up' | 'down') => {
    const arr = [...data.participants];
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= arr.length) return;
    [arr[index], arr[target]] = [arr[target], arr[index]];
    onChange({ participants: arr });
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Review before saving
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Double-check your contribution, schedule, and payout order. You can go back to edit anything.
        </p>
      </div>

      {/* Pardna summary card */}
      <section className="border border-gray-200 rounded-2xl p-5 space-y-4">
        {/* Pardna name & description */}
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

        {/* Stats grid */}
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
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
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
      </section>

      {/* Payout schedule */}
      <section className="border border-gray-200 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#E57432]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </span>
          <h3 className="text-base font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
            Payout schedule
          </h3>
        </div>
        <p className="text-xs text-[#64748B]">
          One payout per round. Use the arrows to fine-tune the order before saving.
        </p>

        <div className="space-y-0">
          {data.participants.filter((p) => p.name.trim()).map((p, i) => (
            <div key={p.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: '#E57432' }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-dark)]">{p.name}</p>
                  <p className="text-xs text-[#64748B]">
                    Round {i + 1} – {formatDate(data.startDate, i * weeks)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[var(--color-dark)]">£{totalPot.toLocaleString()}</span>
                {/* Reorder arrows */}
                <div className="flex flex-col">
                  <button
                    onClick={() => moveParticipant(i, 'up')}
                    disabled={i === 0}
                    className="text-[#94A3B8] hover:text-[#E57432] cursor-pointer bg-transparent border-none p-0 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => moveParticipant(i, 'down')}
                    disabled={i === data.participants.filter((pp) => pp.name.trim()).length - 1}
                    className="text-[#94A3B8] hover:text-[#E57432] cursor-pointer bg-transparent border-none p-0 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info note */}
      <div className="flex items-start gap-2 rounded-2xl p-4" style={{ background: '#FFF7ED', border: '1px solid #FDDCB5' }}>
        <span className="text-[#E57432] shrink-0 mt-0.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
          </svg>
        </span>
        <p className="text-xs text-[#64748B] leading-relaxed">
          Once you save, the pardna and its payout rounds are created. You can still edit details from the pardna overview.
        </p>
      </div>
    </div>
  );
}
