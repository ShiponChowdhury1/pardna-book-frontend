import { useState } from 'react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const kycApplications = [
  {
    id: 'KYC001',
    name: 'Grace Mitchell',
    email: 'grace.m@email.com',
    phone: '+44 7933 111222',
    submittedAt: '2025-04-15',
    documents: ['ID Card', 'Proof of Address'],
    status: 'pending' as const,
  },
  {
    id: 'KYC002',
    name: 'David Brown',
    email: 'david.b@email.com',
    phone: '+44 7944 222333',
    submittedAt: '2025-04-14',
    documents: ['Passport', 'Utility Bill'],
    status: 'pending' as const,
  },
  {
    id: 'KYC003',
    name: 'Tanya Williams',
    email: 'tanya.w@email.com',
    phone: '+1 404 555 7890',
    submittedAt: '2025-04-13',
    documents: ['Driver License'],
    status: 'pending' as const,
  },
  {
    id: 'KYC004',
    name: 'Michael Harris',
    email: 'michael.h@email.com',
    phone: '+1 876 555 4567',
    submittedAt: '2025-04-10',
    documents: ['ID Card', 'Bank Statement'],
    status: 'approved' as const,
  },
  {
    id: 'KYC005',
    name: 'Kevin Stewart',
    email: 'kevin.s@email.com',
    phone: '+1 876 555 8901',
    submittedAt: '2025-04-08',
    documents: ['Passport'],
    status: 'rejected' as const,
  },
];

export default function KycReviewPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const filtered = filter === 'all' ? kycApplications : kycApplications.filter((k) => k.status === filter);
  const pendingCount = kycApplications.filter((k) => k.status === 'pending').length;

  const statusVariant: Record<string, 'warning' | 'success' | 'error'> = {
    pending: 'warning',
    approved: 'success',
    rejected: 'error',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
            KYC Review
          </h1>
          <p className="text-sm text-[var(--color-gray-400)] mt-1">{pendingCount} applications pending review</p>
        </div>
        <div className="flex gap-2">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((f) => (
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

      {/* KYC Cards */}
      <div className="space-y-4">
        {filtered.map((kyc) => (
          <div
            key={kyc.id}
            className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-[var(--color-primary)] font-bold">
                  {kyc.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-dark)]">{kyc.name}</p>
                  <p className="text-xs text-[var(--color-gray-400)]">{kyc.email} • {kyc.phone}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {kyc.documents.map((doc) => (
                      <span key={doc} className="text-xs bg-gray-100 px-2 py-0.5 rounded text-[var(--color-gray-500)]">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant={statusVariant[kyc.status]} size="md">{kyc.status}</Badge>
                <span className="text-xs text-[var(--color-gray-400)]">Submitted {kyc.submittedAt}</span>
              </div>
            </div>

            {kyc.status === 'pending' && (
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <Button size="sm" variant="primary">Approve</Button>
                <Button size="sm" variant="danger">Reject</Button>
                <Button size="sm" variant="ghost">View Documents</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
