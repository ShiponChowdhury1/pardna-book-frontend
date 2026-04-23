import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import UserStatsCard from '../../components/UserStatsCard';

type PaymentStatus = 'completed' | 'pending' | 'overdue';

interface Payment {
  id: number;
  date: string;
  pardna: string;
  amount: string;
  method: string;
  status: PaymentStatus;
}

const PAYMENTS: Payment[] = [
  { id: 1, date: '2026-04-22', pardna: 'Family Monthly', amount: '£200', method: 'Bank Transfer', status: 'completed' },
  { id: 2, date: '2026-04-20', pardna: 'Community Build', amount: '£300', method: 'Bank Transfer', status: 'pending' },
  { id: 3, date: '2026-04-15', pardna: 'Work Friends Savings', amount: '£150', method: 'Card', status: 'completed' },
  { id: 4, date: '2026-04-14', pardna: 'Family Monthly', amount: '£200', method: 'Bank Transfer', status: 'completed' },
  { id: 5, date: '2026-04-10', pardna: 'Community Build', amount: '£300', method: 'Bank Transfer', status: 'completed' },
  { id: 6, date: '2026-04-08', pardna: 'Work Friends Savings', amount: '£150', method: 'Card', status: 'completed' },
  { id: 7, date: '2026-04-05', pardna: 'Family Monthly', amount: '£200', method: 'Bank Transfer', status: 'completed' },
  { id: 8, date: '2026-04-01', pardna: 'Community Build', amount: '£300', method: 'Bank Transfer', status: 'completed' },
  { id: 9, date: '2026-03-28', pardna: 'Work Friends Savings', amount: '£150', method: 'Card', status: 'completed' },
  { id: 10, date: '2026-03-25', pardna: 'Family Monthly', amount: '£200', method: 'Bank Transfer', status: 'completed' },
  { id: 11, date: '2026-03-20', pardna: 'Community Build', amount: '£300', method: 'Bank Transfer', status: 'overdue' },
  { id: 12, date: '2026-03-15', pardna: 'Work Friends Savings', amount: '£150', method: 'Card', status: 'completed' },
];

const statusStyle: Record<PaymentStatus, string> = {
  completed: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  pending: 'text-amber-600 bg-amber-50 border-amber-200',
  overdue: 'text-red-500 bg-red-50 border-red-200',
};

const totalPaid = PAYMENTS.filter(p => p.status === 'completed').reduce((sum, p) => {
  return sum + parseFloat(p.amount.replace(/[£,]/g, ''));
}, 0);

const stats = [
  {
    label: 'Total Payments', value: String(PAYMENTS.length), iconBg: 'bg-orange-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
  },
  {
    label: 'Total Paid', value: `£${totalPaid.toLocaleString()}`, iconBg: 'bg-emerald-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  },
  {
    label: 'Pending', value: String(PAYMENTS.filter(p => p.status === 'pending').length), iconBg: 'bg-amber-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  },
  {
    label: 'Overdue', value: String(PAYMENTS.filter(p => p.status === 'overdue').length), iconBg: 'bg-red-50',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>,
  },
];

const PAGE_SIZE = 10;

export default function PaymentsPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = PAYMENTS.filter(p =>
    p.pardna.toLowerCase().includes(search.toLowerCase()) ||
    p.method.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>Payments</h1>
        <p className="text-sm text-[var(--color-gray-400)] mt-0.5">Your payment history across all pardnas</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
        {stats.map(s => <UserStatsCard key={s.label} {...s} />)}
      </div>

      <div className="relative max-w-lg">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)]" />
        <input type="text" placeholder="Search payments..." value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all"
        />
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3 w-32">Date</th>
                <th className="text-left text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider px-5 py-3">Pardna</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Amount</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Method</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(p => (
                <tr key={p.id} className="border-b border-gray-50 last:border-0 hover:bg-orange-50/20 transition-colors">
                  <td className="px-5 py-3.5 text-xs text-[var(--color-gray-400)] font-mono whitespace-nowrap">{p.date}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-[var(--color-primary)]">{p.pardna}</td>
                  <td className="px-5 py-3.5 text-sm font-bold text-[var(--color-dark)]">{p.amount}</td>
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{p.method}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyle[p.status]}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
          <p className="text-xs text-[var(--color-gray-400)]">
            Showing <span className="font-semibold text-[var(--color-dark)]">{Math.min((page-1)*PAGE_SIZE+1, filtered.length)}–{Math.min(page*PAGE_SIZE, filtered.length)}</span> of <span className="font-semibold text-[var(--color-dark)]">{filtered.length}</span> payments
          </p>
          <div className="flex items-center gap-2">
            <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-[var(--color-gray-500)] hover:bg-gray-50 transition-all cursor-pointer bg-white disabled:opacity-40 disabled:cursor-not-allowed">
              <ChevronLeft size={14} /> Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i+1).map(n => (
              <button key={n} onClick={() => setPage(n)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer border-none ${n === page ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-gray-500)] hover:bg-gray-100'}`}>{n}</button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page === totalPages}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-[var(--color-gray-500)] hover:bg-gray-50 transition-all cursor-pointer bg-white disabled:opacity-40 disabled:cursor-not-allowed">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
