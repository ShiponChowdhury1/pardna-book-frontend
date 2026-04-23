import { useState } from 'react';

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+44 7911 123456',
    dateOfBirth: '1990-05-15',
    address: '42 Brixton Road, London SW9 6BT',
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>Profile</h1>
          <p className="text-sm text-[var(--color-gray-400)] mt-0.5">Manage your personal information</p>
        </div>
        <button
          onClick={() => setEditing(!editing)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer border-none ${
            editing
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-gradient-to-r from-[#E57432] to-[#FF9C65] text-white hover:opacity-90'
          }`}
        >
          {editing ? '✓ Save Changes' : '✎ Edit Profile'}
        </button>
      </div>

      {/* Avatar Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E57432] to-[#FF9C65] flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-orange-500/20">
            SJ
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--color-dark)]">{form.firstName} {form.lastName}</h2>
            <p className="text-sm text-[var(--color-gray-400)]">@sarah_j · Member since Jan 2026</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full border text-emerald-600 bg-emerald-50 border-emerald-200">
                Verified ✓
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full border text-purple-600 bg-purple-50 border-purple-200">
                Trust: 92
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h3 className="text-sm font-semibold text-[var(--color-dark)] mb-5 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E57432]">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4-4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'First Name', field: 'firstName', type: 'text' },
            { label: 'Last Name', field: 'lastName', type: 'text' },
            { label: 'Email Address', field: 'email', type: 'email' },
            { label: 'Phone Number', field: 'phone', type: 'tel' },
            { label: 'Date of Birth', field: 'dateOfBirth', type: 'date' },
          ].map(({ label, field, type }) => (
            <div key={field}>
              <label className="block text-xs font-medium text-[var(--color-gray-400)] mb-1.5">{label}</label>
              <input
                type={type}
                value={form[field as keyof typeof form]}
                onChange={e => handleChange(field, e.target.value)}
                disabled={!editing}
                className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all ${
                  editing
                    ? 'border-orange-200 bg-white focus:outline-none focus:border-[#E57432] text-[var(--color-dark)]'
                    : 'border-gray-100 bg-gray-50 text-[var(--color-dark)] cursor-default'
                }`}
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-[var(--color-gray-400)] mb-1.5">Address</label>
            <input
              type="text"
              value={form.address}
              onChange={e => handleChange('address', e.target.value)}
              disabled={!editing}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all ${
                editing
                  ? 'border-orange-200 bg-white focus:outline-none focus:border-[#E57432] text-[var(--color-dark)]'
                  : 'border-gray-100 bg-gray-50 text-[var(--color-dark)] cursor-default'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Account Summary */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h3 className="text-sm font-semibold text-[var(--color-dark)] mb-5 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E57432]">
            <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M8 7v10M12 7v10M16 7v10" />
          </svg>
          Account Summary
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Active Pardnas', value: '3' },
            { label: 'Total Saved', value: '£2,400' },
            { label: 'Payouts Received', value: '3' },
            { label: 'On-time Rate', value: '98%' },
          ].map(s => (
            <div key={s.label} className="text-center py-3 rounded-xl bg-gray-50">
              <p className="text-lg font-bold text-[var(--color-dark)]">{s.value}</p>
              <p className="text-[10px] text-[var(--color-gray-400)] mt-0.5 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
