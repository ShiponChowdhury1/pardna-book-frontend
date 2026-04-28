import { useState } from 'react';

type NotiType = 'payment' | 'payout' | 'reminder' | 'system' | 'welcome';

interface Notification {
  id: number;
  type: NotiType;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: 1, type: 'reminder', title: 'Payment Due Tomorrow', message: 'Your £300 contribution to Community Build is due tomorrow. Don\'t miss it!', time: '2 hours ago', read: false },
  { id: 2, type: 'payout', title: 'Payout Received! 🎉', message: 'You received £1,800 from Work Friends Savings. The funds have been transferred to your account.', time: '1 day ago', read: false },
  { id: 3, type: 'payment', title: 'Payment Confirmed', message: 'Your £200 payment to Family Monthly has been recorded successfully.', time: '2 days ago', read: false },
  { id: 4, type: 'system', title: 'Trust Score Updated', message: 'Congratulations! Your trust score increased to 92. Keep up the great record!', time: '5 days ago', read: true },
  { id: 5, type: 'reminder', title: 'Upcoming Draw', message: 'The next draw for Family Monthly is on Apr 27. You\'re position #3.', time: '1 week ago', read: true },
  { id: 6, type: 'welcome', title: 'Welcome to Community Build!', message: 'You\'ve been added to Community Build as position #2. Your first contribution of £300 is due on Apr 20.', time: '2 weeks ago', read: true },
  { id: 7, type: 'payment', title: 'Payment Confirmed', message: 'Your £150 payment to Work Friends Savings has been recorded successfully.', time: '2 weeks ago', read: true },
  { id: 8, type: 'system', title: 'Profile Verified', message: 'Your KYC verification has been approved. You now have full access to all features.', time: '3 weeks ago', read: true },
];

const typeConfig: Record<NotiType, { bg: string; icon: React.ReactNode }> = {
  payment: {
    bg: 'bg-amber-50',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
  },
  payout: {
    bg: 'bg-emerald-50',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  },
  reminder: {
    bg: 'bg-orange-50',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  },
  system: {
    bg: 'bg-blue-50',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
  },
  welcome: {
    bg: 'bg-purple-50',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  },
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'overdue' | 'due-soon' | 'payouts'>('all');

  // Extended data with pardna groups
  const alertNotifications = [
    { id: 1, type: 'due-soon', title: 'Contributions due soon', desc: '2 participants have contributions due for Round 5.', group: 'Family Monthly', date: '2026-04-21', icon: 'alert' },
    { id: 2, type: 'due-soon', title: 'Contributions due soon', desc: '2 participants have contributions due for Round 4.', group: 'Work Friends Savings', date: '2026-04-21', icon: 'alert' },
    { id: 3, type: 'due-soon', title: 'Contributions due soon', desc: '2 participants have contributions due for Round 9.', group: 'Church Building Fund', date: '2026-04-21', icon: 'alert' },
    { id: 4, type: 'due-soon', title: 'Contributions due soon', desc: '2 participants have contributions due for Round 4.', group: 'Sisters Circle', date: '2026-04-21', icon: 'alert' },
    { id: 5, type: 'due-soon', title: 'Contributions due soon', desc: '2 participants have contributions due for Round 6.', group: 'Market Traders', date: '2026-04-21', icon: 'alert' },
    { id: 6, type: 'due-soon', title: 'Contributions due soon', desc: '2 participants have contributions due for Round 2.', group: 'Wedding Pandna', date: '2026-04-21', icon: 'alert' },
    { id: 7, type: 'due-soon', title: 'Contributions due soon', desc: '2 participants have contributions due for Round 7.', group: 'Back to School', date: '2026-04-21', icon: 'alert' },
    { id: 8, type: 'overdue', title: 'Late payment — Grace M.', desc: 'Round 6 contribution of £200 was 1 day overdue.', group: 'Family Monthly', date: '2026-04-20', icon: 'warning' },
    { id: 9, type: 'overdue', title: 'Late payment — Ama O.', desc: 'Round 4 contribution of £150 was 1 day overdue.', group: 'Sisters Circle', date: '2026-04-20', icon: 'warning' },
    { id: 10, type: 'overdue', title: 'Late payment — Kwame B.', desc: 'Round 6 contribution of £300 was 2 days overdue.', group: 'Market Traders', date: '2026-04-19', icon: 'warning' },
    { id: 11, type: 'payouts', title: 'Payout Ready', desc: 'You received £1,800 from Work Friends Savings.', group: 'Work Friends Savings', date: '2026-04-21', icon: 'success' },
  ];

  const filtered = filter === 'all' ? alertNotifications : alertNotifications.filter(n => n.type === filter);

  const getIcon = (type: string) => {
    if (type === 'alert') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E57432" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/></svg>;
    if (type === 'warning') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8294A" strokeWidth="2.5"><path d="M12 2l10 18H2z"/></svg>;
    if (type === 'success') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
  };

  return (
    <div className="space-y-5 animate-fade-in pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 overflow-x-auto">
        {(['all', 'overdue', 'due-soon', 'payouts'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border-none whitespace-nowrap ${
              filter === f ? 'bg-[#E57432] text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}>
            {f === 'all' ? 'All' : f === 'overdue' ? 'Overdue' : f === 'due-soon' ? 'Due Soon' : 'Payouts'}
          </button>
        ))}
      </div>

      {/* Notification items */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
            <p className="text-sm font-semibold text-gray-900">No notifications</p>
          </div>
        ) : (
          filtered.map(n => (
            <div key={n.id} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(n.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{n.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{n.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium">
                      <span className="text-gray-600">{n.group}</span>
                      <span className="text-gray-400 ml-2">{n.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
