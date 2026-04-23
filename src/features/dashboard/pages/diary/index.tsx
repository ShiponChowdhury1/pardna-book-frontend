import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import UserStatsCard from '../../components/UserStatsCard';

// ─── Data ──────────────────────────────────────────────────────────────────────

type ActivityType = 'payment' | 'payout' | 'reminder' | 'system' | 'joined';

interface DiaryEntry {
  id: number;
  time: string;
  action: string;
  target: string;
  type: ActivityType;
}

const ENTRIES: DiaryEntry[] = [
  { id:  1, time: '2026-04-22 09:15', action: 'Payment recorded',      target: 'Family Monthly — £200',                    type: 'payment'  },
  { id:  2, time: '2026-04-21 14:30', action: 'Payout received',       target: 'Work Friends Savings — £1,800',             type: 'payout'   },
  { id:  3, time: '2026-04-21 10:00', action: 'Payment reminder',      target: 'Community Build — £300 due in 2 days',      type: 'reminder' },
  { id:  4, time: '2026-04-18 16:45', action: 'Joined pardna',         target: 'Community Build — Position #2',             type: 'joined'   },
  { id:  5, time: '2026-04-17 08:00', action: 'Trust score updated',   target: 'Score increased to 92',                    type: 'system'   },
  { id:  6, time: '2026-04-15 11:20', action: 'Payment recorded',      target: 'Work Friends Savings — £150',              type: 'payment'  },
  { id:  7, time: '2026-04-14 09:00', action: 'Payment recorded',      target: 'Family Monthly — £200',                    type: 'payment'  },
  { id:  8, time: '2026-04-12 15:30', action: 'Payout received',       target: 'Family Monthly — £1,800',                  type: 'payout'   },
  { id:  9, time: '2026-04-10 10:15', action: 'Payment reminder',      target: 'Work Friends Savings — Due tomorrow',       type: 'reminder' },
  { id: 10, time: '2026-04-08 14:00', action: 'Payment recorded',      target: 'Community Build — £300',                   type: 'payment'  },
  { id: 11, time: '2026-04-06 09:30', action: 'Trust score updated',   target: 'Score increased to 90',                    type: 'system'   },
  { id: 12, time: '2026-04-05 16:00', action: 'Payment recorded',      target: 'Family Monthly — £200',                    type: 'payment'  },
  { id: 13, time: '2026-04-03 11:45', action: 'Joined pardna',         target: 'Work Friends Savings — Position #7',       type: 'joined'   },
  { id: 14, time: '2026-04-01 08:30', action: 'Payment reminder',      target: 'Family Monthly — Due in 3 days',           type: 'reminder' },
  { id: 15, time: '2026-03-28 14:20', action: 'Payout received',       target: 'Family Monthly — £1,800',                  type: 'payout'   },
];

// ─── Badge styles ──────────────────────────────────────────────────────────────

const typeMeta: Record<ActivityType, { label: string; cls: string }> = {
  payment:  { label: 'payment',   cls: 'text-amber-700  bg-amber-50  border-amber-200'   },
  payout:   { label: 'payout',    cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  reminder: { label: 'reminder',  cls: 'text-orange-600 bg-orange-50 border-orange-200'  },
  system:   { label: 'system',    cls: 'text-blue-600   bg-blue-50   border-blue-200'    },
  joined:   { label: 'joined',    cls: 'text-purple-600 bg-purple-50 border-purple-200'  },
};

// ─── Stats ─────────────────────────────────────────────────────────────────────

const paymentCount = ENTRIES.filter(e => e.type === 'payment').length;
const payoutCount  = ENTRIES.filter(e => e.type === 'payout').length;

const stats = [
  {
    label: 'Total Events', value: String(ENTRIES.length), iconBg: 'bg-purple-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  },
  {
    label: 'Payments Made', value: String(paymentCount), iconBg: 'bg-amber-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
  },
  {
    label: 'Payouts Received', value: String(payoutCount), iconBg: 'bg-emerald-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  },
  {
    label: 'Active Since', value: 'Jan 2026', iconBg: 'bg-blue-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  },
];

const PAGE_SIZE = 10;

// ─── Component ─────────────────────────────────────────────────────────────────

export default function DiaryPage() {
  const [search, setSearch] = useState('');
  const [page,   setPage]   = useState(1);

  const filtered   = ENTRIES.filter(e =>
    e.action.toLowerCase().includes(search.toLowerCase()) ||
    e.target.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-5 animate-fade-in">

      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Diary
        </h1>
        <p className="text-sm text-[var(--color-gray-400)] mt-0.5">Your personal activity log</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
        {stats.map(s => <UserStatsCard key={s.label} {...s} />)}
      </div>

      {/* Search */}
      <div className="relative max-w-lg">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)]" />
        <input
          type="text"
          placeholder="Search diary..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3 w-40">Time</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Action</th>
                <th className="text-left text-xs font-semibold text-[var(--color-primary)]  uppercase tracking-wider px-5 py-3">Details</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Type</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(entry => {
                const meta = typeMeta[entry.type];
                return (
                  <tr key={entry.id} className="border-b border-gray-50 last:border-0 hover:bg-orange-50/20 transition-colors">
                    <td className="px-5 py-3.5 text-xs text-[var(--color-gray-400)] font-mono whitespace-nowrap">{entry.time}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-[var(--color-dark)]">{entry.action}</td>
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-[var(--color-primary)]">{entry.target}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${meta.cls}`}>
                        {meta.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
          <p className="text-xs text-[var(--color-gray-400)]">
            Showing{' '}
            <span className="font-semibold text-[var(--color-dark)]">
              {Math.min((page-1)*PAGE_SIZE+1, filtered.length)}–{Math.min(page*PAGE_SIZE, filtered.length)}
            </span>{' '}
            of{' '}
            <span className="font-semibold text-[var(--color-dark)]">{filtered.length}</span>{' '}
            entries
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p-1))}
              disabled={page === 1}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-[var(--color-gray-500)] hover:bg-gray-50 hover:text-[var(--color-dark)] transition-all cursor-pointer bg-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={14} /> Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i+1).map(n => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer border-none ${
                  n === page ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-gray-500)] hover:bg-gray-100'
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setPage(p => Math.min(totalPages, p+1))}
              disabled={page === totalPages}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-[var(--color-gray-500)] hover:bg-gray-50 hover:text-[var(--color-dark)] transition-all cursor-pointer bg-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
