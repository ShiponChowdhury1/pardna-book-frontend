import type { NewPardnaFormData, ParticipantEntry } from '../types';

interface Props {
  data: NewPardnaFormData;
  onChange: (d: Partial<NewPardnaFormData>) => void;
}

export default function StepParticipants({ data, onChange }: Props) {
  const updateParticipant = (id: number, field: keyof ParticipantEntry, value: string) => {
    onChange({
      participants: data.participants.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  const removeParticipant = (id: number) => {
    if (data.participants.length <= 1) return;
    onChange({ participants: data.participants.filter((p) => p.id !== id) });
  };

  const addParticipant = () => {
    const newId = Math.max(0, ...data.participants.map((p) => p.id)) + 1;
    onChange({
      participants: [...data.participants, { id: newId, name: '', phone: '' }],
    });
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Warning banner */}
      <div className="rounded-2xl p-4" style={{ background: '#FFF7ED', border: '1px solid #FDDCB5' }}>
        <p className="text-sm font-bold text-[var(--color-dark)] mb-1">
          ⚠ A pardna is only as strong as its weakest link.
        </p>
        <p className="text-xs text-[#64748B] leading-relaxed">
          Choose participants who are <strong className="text-[var(--color-dark)]">punctual, trustworthy, and can comfortably afford</strong> the contributions. As banker, you'll need to chase late payments and cover any shortfalls to keep the cycle moving. Take your time — a strong group protects everyone.
        </p>
      </div>

      {/* Help text */}
      <p className="text-xs text-[#64748B]">
        Add participants now or later. Tap the contact icon to pick from your diary or phone book.
      </p>

      {/* Participant cards */}
      <div className="space-y-4">
        {data.participants.map((p, index) => (
          <div key={p.id} className="border border-gray-200 rounded-2xl p-4 space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[var(--color-dark)]">Participant {index + 1}</h3>
              <button
                onClick={() => removeParticipant(p.id)}
                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-red-500 cursor-pointer bg-transparent border-none transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Full name */}
            <input
              type="text"
              value={p.name}
              onChange={(e) => updateParticipant(p.id, 'name', e.target.value)}
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] placeholder:text-[#94A3B8] outline-none focus:border-[#E57432] transition-colors"
            />

            {/* Phone number */}
            <div>
              <input
                type="text"
                value={p.phone}
                onChange={(e) => updateParticipant(p.id, 'phone', e.target.value)}
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] placeholder:text-[#94A3B8] outline-none focus:border-[#E57432] transition-colors"
              />
              <p className="text-xs text-[#E57432] mt-1 font-medium">Required</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add another participant */}
      <button
        type="button"
        onClick={addParticipant}
        className="w-full py-3 rounded-xl text-white font-semibold text-sm cursor-pointer border-none transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(135deg, #E57432 0%, #F4A261 100%)' }}
      >
        + Add another participant
      </button>

      {/* Confirmation checkbox */}
      <div
        className="rounded-2xl p-4 flex items-start gap-3 cursor-pointer"
        style={{ background: '#FFF7ED', border: '1px solid #FDDCB5' }}
        onClick={() => onChange({ confirmed: !data.confirmed })}
      >
        <div
          className="w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all"
          style={{
            borderColor: data.confirmed ? '#E57432' : '#D1D5DB',
            background: data.confirmed ? '#E57432' : 'transparent',
          }}
        >
          {data.confirmed && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </div>
        <p className="text-xs text-[#64748B] leading-relaxed">
          I've reviewed my participants and confirm they are trustworthy, punctual, and able to afford the contributions. I understand that as banker I'll need to step in if anyone falls short.
        </p>
      </div>
    </div>
  );
}
