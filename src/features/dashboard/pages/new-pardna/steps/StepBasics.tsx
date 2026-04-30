import type { NewPardnaFormData } from '../types';

interface Props {
  data: NewPardnaFormData;
  onChange: (d: Partial<NewPardnaFormData>) => void;
}

export default function StepBasics({ data, onChange }: Props) {
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Pardna name */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Pardna name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="e.g. Family Monthly"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] placeholder:text-[#94A3B8] outline-none focus:border-[#E57432] transition-colors"
        />
      </div>

      {/* Description (optional) */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Description (optional)</label>
        <textarea
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder="What's this pardna for?"
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] placeholder:text-[#94A3B8] outline-none focus:border-[#E57432] transition-colors resize-none"
        />
      </div>

      {/* Contribution amount (£) */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Contribution amount (£)</label>
        <input
          type="number"
          value={data.contributionAmount}
          onChange={(e) => onChange({ contributionAmount: e.target.value })}
          placeholder="200"
          min={1}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] placeholder:text-[#94A3B8] outline-none focus:border-[#E57432] transition-colors"
        />
      </div>

      {/* Frequency */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Frequency</label>
        <div className="relative">
          <select
            value={data.frequency}
            onChange={(e) => onChange({ frequency: e.target.value as NewPardnaFormData['frequency'] })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm appearance-none text-[var(--color-dark)] cursor-pointer outline-none focus:border-[#E57432] transition-colors"
            style={{ color: data.frequency ? 'var(--color-dark)' : '#94A3B8' }}
          >
            <option value="" disabled>Choose frequency</option>
            <option value="Weekly">Weekly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Start date */}
      <div>
        <label className="block text-sm font-bold text-[var(--color-dark)] mb-1.5">Start date</label>
        <input
          type="date"
          value={data.startDate}
          onChange={(e) => onChange({ startDate: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-dark)] outline-none focus:border-[#E57432] transition-colors"
        />
      </div>
    </div>
  );
}
