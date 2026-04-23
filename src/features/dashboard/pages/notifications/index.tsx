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
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filtered = filter === 'unread' ? notifications.filter(n => !n.read) : notifications;
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  const toggleRead = (id: number) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: !n.read } : n));

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>Notifications</h1>
          <p className="text-sm text-[var(--color-gray-400)] mt-0.5">{unreadCount} unread notifications</p>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead}
            className="text-xs font-semibold text-[#E57432] hover:text-[#c5612a] transition-colors cursor-pointer bg-transparent border-none">
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2">
        {(['all', 'unread'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border-none ${
              filter === f ? 'bg-[#E57432] text-white' : 'bg-white text-[var(--color-gray-500)] hover:bg-gray-100 border border-gray-200'
            }`}>
            {f === 'all' ? `All (${notifications.length})` : `Unread (${unreadCount})`}
          </button>
        ))}
      </div>

      {/* Notification list */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-[var(--color-dark)]">All caught up!</p>
            <p className="text-xs text-[var(--color-gray-400)] mt-1">No unread notifications</p>
          </div>
        ) : (
          filtered.map(n => {
            const config = typeConfig[n.type];
            return (
              <div key={n.id}
                onClick={() => toggleRead(n.id)}
                className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                  n.read ? 'bg-white border-gray-100 hover:bg-gray-50' : 'bg-orange-50/30 border-orange-200/50 hover:bg-orange-50/50'
                }`}>
                <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center shrink-0`}>
                  {config.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold ${n.read ? 'text-[var(--color-dark)]' : 'text-[#E57432]'}`}>{n.title}</p>
                    {!n.read && <span className="w-2 h-2 rounded-full bg-[#E57432] shrink-0" />}
                  </div>
                  <p className="text-xs text-[var(--color-gray-500)] mt-1 leading-relaxed">{n.message}</p>
                  <p className="text-[10px] text-[var(--color-gray-300)] mt-2">{n.time}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
