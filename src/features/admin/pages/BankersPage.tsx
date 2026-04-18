import Badge from '@/components/ui/Badge';

const bankers = [
  { id: 'B001', name: 'Sarah Johnson', phone: '+44 7911 123456', pardnas: 3, participants: 24, trustScore: 95, status: 'active' as const },
  { id: 'B002', name: 'Donna Robinson', phone: '+44 7922 234567', pardnas: 2, participants: 18, trustScore: 88, status: 'active' as const },
  { id: 'B003', name: 'James King', phone: '+1 404 555 0123', pardnas: 1, participants: 6, trustScore: 72, status: 'suspended' as const },
  { id: 'B004', name: 'Mike Thompson', phone: '+1 876 555 0456', pardnas: 2, participants: 14, trustScore: 91, status: 'active' as const },
];

export default function BankersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Bankers
        </h1>
        <span className="text-sm text-[var(--color-gray-400)]">{bankers.length} total bankers</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bankers.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white font-bold text-sm">
                  {b.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-dark)]">{b.name}</p>
                  <p className="text-xs text-[var(--color-gray-400)]">{b.phone}</p>
                </div>
              </div>
              <Badge variant={b.status === 'active' ? 'success' : 'error'} size="sm">
                {b.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-lg font-bold text-[var(--color-dark)]">{b.pardnas}</p>
                <p className="text-xs text-[var(--color-gray-400)]">Pardnas</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[var(--color-dark)]">{b.participants}</p>
                <p className="text-xs text-[var(--color-gray-400)]">Participants</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[var(--color-primary)]">{b.trustScore}</p>
                <p className="text-xs text-[var(--color-gray-400)]">Trust Score</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
