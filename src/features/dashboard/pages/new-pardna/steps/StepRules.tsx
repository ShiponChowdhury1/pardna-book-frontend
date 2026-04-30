import type { NewPardnaFormData } from '../types';

interface Props {
  data: NewPardnaFormData;
  onChange: (d: Partial<NewPardnaFormData>) => void;
}

export default function StepRules({ data, onChange }: Props) {
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Number of participants */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Number of participants</label>
        <input
          type="number"
          value={data.numberOfParticipants}
          onChange={(e) => onChange({ numberOfParticipants: e.target.value })}
          placeholder="8"
          min={2}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] placeholder:text-[#94A3B8] outline-none focus:border-[#E57432] transition-colors"
        />
      </div>

      {/* Payout order */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Payout order</label>
        <div className="relative">
          <select
            value={data.payoutOrder}
            onChange={(e) => onChange({ payoutOrder: e.target.value as NewPardnaFormData['payoutOrder'] })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm appearance-none cursor-pointer outline-none focus:border-[#E57432] transition-colors"
            style={{ color: data.payoutOrder ? 'var(--color-dark)' : '#94A3B8' }}
          >
            <option value="" disabled>Choose payout structure</option>
            <option value="Fixed rotation">Fixed rotation</option>
            <option value="Random draw">Random draw</option>
            <option value="Bidding">Bidding</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Pardna rules / notes */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Pardna rules / notes</label>
        <textarea
          value={data.rulesNotes}
          onChange={(e) => onChange({ rulesNotes: e.target.value })}
          placeholder="Late payment policy, payout conditions, etc."
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] placeholder:text-[#94A3B8] outline-none focus:border-[#E57432] transition-colors resize-none"
        />
      </div>
    </div>
  );
}
