import { useState } from 'react';
import { Search } from 'lucide-react';
import UserStatsCard from '../../components/UserStatsCard';

type DrawStatus = 'upcoming' | 'received' | 'scheduled';

interface Payout {
  id: number;
  pardna: string;
  amount: string;
  drawDate: string;
  position: number;
  status: DrawStatus;
}

const PAYOUTS: Payout[] = [
  { id: 1, pardna: 'Family Monthly', amount: '£1,800', drawDate: 'Apr 27, 2026', position: 3, status: 'upcoming' },
  { id: 2, pardna: 'Work Friends Savings', amount: '£1,800', drawDate: 'May 10, 2026', position: 7, status: 'scheduled' },
  { id: 3, pardna: 'Community Build', amount: '£2,100', drawDate: 'Jun 02, 2026', position: 2, status: 'scheduled' },
  { id: 4, pardna: 'Family Monthly', amount: '£1,800', drawDate: 'Mar 27, 2026', position: 3, status: 'received' },
  { id: 5, pardna: 'Work Friends Savings', amount: '£1,800', drawDate: 'Feb 10, 2026', position: 7, status: 'received' },
  { id: 6, pardna: 'Family Monthly', amount: '£1,800', drawDate: 'Feb 27, 2026', position: 3, status: 'received' },
];

const statusStyle: Record<DrawStatus, string> = {
  upcoming: 'text-orange-600 bg-orange-50 border-orange-200',
  received: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  scheduled: 'text-blue-600 bg-blue-50 border-blue-200',
};

const totalReceived = PAYOUTS.filter(p => p.status === 'received').reduce((s, p) => s + parseFloat(p.amount.replace(/[£,]/g, '')), 0);

const stats = [
  {
    label: 'Total Payouts', value: String(PAYOUTS.length), iconBg: 'bg-purple-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  },
  {
    label: 'Total Received', value: `£${totalReceived.toLocaleString()}`, iconBg: 'bg-emerald-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
  },
  {
    label: 'Next Payout', value: '£1,800', subtitle: 'In 5 days', iconBg: 'bg-orange-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  },
  {
    label: 'Scheduled', value: String(PAYOUTS.filter(p => p.status === 'scheduled').length), iconBg: 'bg-blue-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  },
];

export default function PayoutsPage() {
  const [search, setSearch] = useState('');

  const filtered = PAYOUTS.filter(p =>
    p.pardna.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>Draw Payouts</h1>
        <p className="text-sm text-[var(--color-gray-400)] mt-0.5">Your upcoming and past payout schedule</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
        {stats.map(s => <UserStatsCard key={s.label} {...s} />)}
      </div>

      <div className="relative max-w-lg">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)]" />
        <input type="text" placeholder="Search payouts..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all"
        />
      </div>

      {/* Payout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(payout => (
          <div key={payout.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:shadow-orange-500/5 transition-all group">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${statusStyle[payout.status]}`}>
                {payout.status}
              </span>
              <span className="text-xs text-[var(--color-gray-400)]">Position #{payout.position}</span>
            </div>

            {/* Pardna name */}
            <h3 className="text-base font-bold text-[var(--color-dark)]">{payout.pardna}</h3>

            {/* Amount */}
            <p className="text-2xl font-bold mt-2" style={{ color: payout.status === 'received' ? '#10B981' : '#E57432' }}>
              {payout.amount}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span className="text-xs text-[var(--color-gray-400)]">
                {payout.status === 'received' ? 'Received on' : 'Draw date'}: <span className="font-semibold text-[var(--color-dark)]">{payout.drawDate}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
