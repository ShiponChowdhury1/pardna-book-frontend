import Badge from '@/components/ui/Badge';

const auditLogs = [
  { id: 1, action: 'User Login', user: 'Admin', target: 'System', timestamp: '2025-04-18 04:12:00', type: 'auth' as const },
  { id: 2, action: 'Payment Recorded', user: 'Sarah J.', target: 'Family Monthly → Grace M.', timestamp: '2025-04-18 04:12:00', type: 'payment' as const },
  { id: 3, action: 'Payment Marked Overdue', user: 'System', target: 'Community Build → Participant #4', timestamp: '2025-04-18 03:45:00', type: 'status' as const },
  { id: 4, action: 'User Suspended', user: 'Admin', target: 'James King', timestamp: '2025-04-17 12:30:00', type: 'admin' as const },
  { id: 5, action: 'Cycle Completed', user: 'Mike T.', target: 'Summer Holiday Fund', timestamp: '2025-04-17 10:00:00', type: 'system' as const },
  { id: 6, action: 'KYC Approved', user: 'Admin', target: 'Michael Harris', timestamp: '2025-04-16 14:22:00', type: 'kyc' as const },
  { id: 7, action: 'New Pardna Created', user: 'Andrea C.', target: 'Wedding Savings', timestamp: '2025-04-16 09:15:00', type: 'system' as const },
  { id: 8, action: 'KYC Rejected', user: 'Admin', target: 'Kevin Stewart', timestamp: '2025-04-15 16:40:00', type: 'kyc' as const },
  { id: 9, action: 'Settings Updated', user: 'Admin', target: 'Notification Preferences', timestamp: '2025-04-15 11:00:00', type: 'admin' as const },
  { id: 10, action: 'Payout Processed', user: 'System', target: 'Family Monthly → David B.', timestamp: '2025-04-14 08:30:00', type: 'payment' as const },
];

const typeBadge: Record<string, { variant: 'success' | 'warning' | 'error' | 'info' | 'purple' | 'default'; label: string }> = {
  auth: { variant: 'info', label: 'Auth' },
  payment: { variant: 'success', label: 'Payment' },
  status: { variant: 'warning', label: 'Status' },
  admin: { variant: 'error', label: 'Admin' },
  system: { variant: 'purple', label: 'System' },
  kyc: { variant: 'info', label: 'KYC' },
};

export default function AuditLogPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Audit Log
        </h1>
        <span className="text-sm text-[var(--color-gray-400)]">{auditLogs.length} events</span>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Type</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Action</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">User</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Target</th>
                <th className="text-left text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider px-5 py-3">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => {
                const badge = typeBadge[log.type] || { variant: 'default' as const, label: log.type };
                return (
                  <tr key={log.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <Badge variant={badge.variant} size="sm">{badge.label}</Badge>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium text-[var(--color-dark)]">{log.action}</td>
                    <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{log.user}</td>
                    <td className="px-5 py-3.5 text-sm text-[var(--color-gray-500)]">{log.target}</td>
                    <td className="px-5 py-3.5 text-xs text-[var(--color-gray-400)] font-mono">{log.timestamp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
