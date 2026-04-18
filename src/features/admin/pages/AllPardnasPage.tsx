import { useState } from 'react';
import Badge from '@/components/ui/Badge';

const pardnas = [
  { id: 'P001', name: 'Family Monthly', banker: 'Sarah J.', participants: 8, collected: '£4,200', status: 'active' as const, created: '2025-01-15' },
  { id: 'P002', name: 'Community Build', banker: 'Donna R.', participants: 12, collected: '£8,400', status: 'active' as const, created: '2025-02-20' },
  { id: 'P003', name: 'Youth Club Savings', banker: 'James K.', participants: 6, collected: '£2,100', status: 'overdue' as const, created: '2025-03-10' },
  { id: 'P004', name: 'Summer Holiday Fund', banker: 'Mike T.', participants: 10, collected: '£12,500', status: 'completed' as const, created: '2024-11-01' },
  { id: 'P005', name: 'Wedding Savings', banker: 'Andrea C.', participants: 5, collected: '£3,800', status: 'active' as const, created: '2025-04-01' },
  { id: 'P006', name: 'Business Starter', banker: 'Paul M.', participants: 8, collected: '£6,200', status: 'paused' as const, created: '2025-01-20' },
];

const statusBadge: Record<string, 'success' | 'warning' | 'error' | 'default'> = {
  active: 'success',
  completed: 'info' as 'success',
  overdue: 'error',
  paused: 'warning',
};

export default function AllPardnasPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? pardnas : pardnas.filter((p) => p.status === filter);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
          All Pardnas
        </h1>
        <div className="flex items-center gap-2">
          {['all', 'active', 'completed', 'overdue', 'paused'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all cursor-pointer border-none ${
                filter === f
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-[var(--color-gray-500)] hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">ID</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Name</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Banker</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Participants</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Collected</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Status</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Created</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-400)]">{p.id}</td>
                  <td className="px-5 py-3.5 text-sm font-medium text-[var(--color-dark)]">{p.name}</td>
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{p.banker}</td>
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{p.participants}</td>
                  <td className="px-5 py-3.5 text-sm font-medium text-[var(--color-dark)]">{p.collected}</td>
                  <td className="px-5 py-3.5">
                    <Badge variant={statusBadge[p.status] || 'default'} size="sm">{p.status}</Badge>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-400)]">{p.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
