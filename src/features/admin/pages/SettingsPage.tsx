import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function SettingsPage() {
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySms, setNotifySms] = useState(true);
  const [autoApproveKyc, setAutoApproveKyc] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
        Settings
      </h1>

      {/* General Settings */}
      <Card>
        <h3 className="text-sm font-semibold text-[var(--color-dark)] mb-5">General Settings</h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-dark)]">Platform Name</p>
              <p className="text-xs text-[var(--color-gray-400)]">The display name of the platform</p>
            </div>
            <input
              type="text"
              defaultValue="PardnaBook"
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 focus:border-[var(--color-primary)]/30"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-dark)]">Default Currency</p>
              <p className="text-xs text-[var(--color-gray-400)]">Currency for new pardna groups</p>
            </div>
            <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 bg-white cursor-pointer">
              <option>GBP (£)</option>
              <option>USD ($)</option>
              <option>JMD (J$)</option>
              <option>EUR (€)</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-dark)]">Max Group Size</p>
              <p className="text-xs text-[var(--color-gray-400)]">Maximum participants per pardna</p>
            </div>
            <input
              type="number"
              defaultValue={20}
              min={2}
              max={50}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 focus:border-[var(--color-primary)]/30"
            />
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <h3 className="text-sm font-semibold text-[var(--color-dark)] mb-5">Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-dark)]">Email Notifications</p>
              <p className="text-xs text-[var(--color-gray-400)]">Receive email alerts for new events</p>
            </div>
            <button
              onClick={() => setNotifyEmail(!notifyEmail)}
              className={`w-11 h-6 rounded-full transition-colors cursor-pointer border-none ${notifyEmail ? 'bg-[var(--color-primary)]' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${notifyEmail ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-dark)]">SMS Notifications</p>
              <p className="text-xs text-[var(--color-gray-400)]">Send SMS reminders to participants</p>
            </div>
            <button
              onClick={() => setNotifySms(!notifySms)}
              className={`w-11 h-6 rounded-full transition-colors cursor-pointer border-none ${notifySms ? 'bg-[var(--color-primary)]' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${notifySms ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card>
        <h3 className="text-sm font-semibold text-[var(--color-dark)] mb-5">Security & Compliance</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-dark)]">Auto-approve KYC</p>
              <p className="text-xs text-[var(--color-gray-400)]">Automatically approve low-risk KYC applications</p>
            </div>
            <button
              onClick={() => setAutoApproveKyc(!autoApproveKyc)}
              className={`w-11 h-6 rounded-full transition-colors cursor-pointer border-none ${autoApproveKyc ? 'bg-[var(--color-primary)]' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${autoApproveKyc ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-dark)]">Maintenance Mode</p>
              <p className="text-xs text-[var(--color-gray-400)]">Temporarily disable the platform</p>
            </div>
            <button
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`w-11 h-6 rounded-full transition-colors cursor-pointer border-none ${maintenanceMode ? 'bg-[var(--color-error)]' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${maintenanceMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>
      </Card>

      {/* Save */}
      <div className="flex justify-end gap-3">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
}
