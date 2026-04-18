import { useState } from 'react';
import Badge from '@/components/ui/Badge';

const participants = [
  { id: 'U001', name: 'Grace Mitchell', phone: '+44 7933 111222', pardna: 'Family Monthly', banker: 'Sarah J.', contributions: 8, trustScore: 96, status: 'active' as const },
  { id: 'U002', name: 'David Brown', phone: '+44 7944 222333', pardna: 'Community Build', banker: 'Donna R.', contributions: 12, trustScore: 91, status: 'active' as const },
  { id: 'U003', name: 'Tanya Williams', phone: '+1 404 555 7890', pardna: 'Youth Club Savings', banker: 'James K.', contributions: 4, trustScore: 78, status: 'overdue' as const },
  { id: 'U004', name: 'Michael Harris', phone: '+1 876 555 4567', pardna: 'Summer Holiday Fund', banker: 'Mike T.', contributions: 10, trustScore: 93, status: 'completed' as const },
  { id: 'U005', name: 'Lisa Campbell', phone: '+44 7955 333444', pardna: 'Family Monthly', banker: 'Sarah J.', contributions: 8, trustScore: 89, status: 'active' as const },
  { id: 'U006', name: 'Andre Clarke', phone: '+44 7966 444555', pardna: 'Community Build', banker: 'Donna R.', contributions: 11, trustScore: 85, status: 'active' as const },
  { id: 'U007', name: 'Sharon Peters', phone: '+44 7977 555666', pardna: 'Wedding Savings', banker: 'Andrea C.', contributions: 3, trustScore: 82, status: 'active' as const },
  { id: 'U008', name: 'Kevin Stewart', phone: '+1 876 555 8901', pardna: 'Business Starter', banker: 'Paul M.', contributions: 6, trustScore: 70, status: 'paused' as const },
];

const statusBadge: Record<string, 'success' | 'warning' | 'error' | 'default'> = {
  active: 'success',
  completed: 'info' as 'success',
  overdue: 'error',
  paused: 'warning',
};

export default function ParticipantsPage() {
  const [search, setSearch] = useState('');

  const filtered = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.pardna.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Participants
        </h1>
        <span className="text-sm text-[var(--color-gray-400)]">{participants.length} total participants</span>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-400)" strokeWidth="2" className="absolute left-3 top-1/2 -translate-y-1/2">
          <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search participants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 focus:border-[var(--color-primary)]/30 transition-all"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Name</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Phone</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Pardna</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Banker</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Contributions</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Trust</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">
                        {p.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-[var(--color-dark)]">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{p.phone}</td>
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{p.pardna}</td>
                  <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{p.banker}</td>
                  <td className="px-5 py-3.5 text-sm font-medium text-[var(--color-dark)]">{p.contributions}</td>
                  <td className="px-5 py-3.5 text-sm font-medium text-[var(--color-primary)]">{p.trustScore}</td>
                  <td className="px-5 py-3.5">
                    <Badge variant={statusBadge[p.status] || 'default'} size="sm">{p.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
