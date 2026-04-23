import { useNavigate } from 'react-router-dom';

export default function GuidePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4"
        style={{ fontFamily: 'var(--font-heading)' }}>
        What is a pardna?
      </h1>

      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
        A pardna (also called a susu, partner hand, or ROSCA) is a group of people who each chip in
        the same amount on the same day. Every round, one person takes the whole pot. Everyone gets a
        turn — and when the last person has been paid, the pardna is done.
      </p>

      <p className="text-sm text-[var(--color-text-muted)] mb-6">
        <span className="text-[var(--color-primary)] font-medium cursor-pointer hover:underline">
          PardnaBook doesn't move money.
        </span>{' '}
        It's a clean record-book for the banker (the organiser) so nothing gets forgotten and
        everyone can see where they stand.
      </p>

      {/* Before you start box */}
      <div className="border border-[var(--color-border)] rounded-xl p-5 bg-orange-50/40 mb-10">
        <p className="text-sm font-semibold text-[var(--color-text)] mb-3">Before you start, agree on:</p>
        <ul className="space-y-1 text-sm text-[var(--color-text-muted)]">
          <li>How much each person can put in per round</li>
          <li>How often (weekly, fortnightly, monthly)</li>
          <li>Who is in the group</li>
          <li>The order people get paid out</li>
          <li>What happens if someone misses a payment</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold text-[var(--color-text)] mb-6"
        style={{ fontFamily: 'var(--font-heading)' }}>
        The 5 steps
      </h2>

      <div className="space-y-8 mb-12">

        {[
          {
            num: 1, label: 'STEP 01', title: 'Set it up',
            desc: 'Tap "+ New Pardna" on your dashboard. Give it a name everyone will recognise (e.g. "Family Monthly"), set how much each person puts in, how often (weekly, fortnightly, monthly), and pick the start date. Decide the payout order — who gets the pot first, second, third, and so on.'
          },
          {
            num: 2, label: 'STEP 02', title: 'Add your people',
            desc: 'Add prospects from your contacts or just type their names in. Send each person the invite link so everyone is clear on the amount, the dates, and when their turn comes. Setting expectations on day one saves arguments later.'
          },
          {
            num: 3, label: 'STEP 03', title: 'Collect each round',
            desc: 'On payment day, open the pardna and tap "Record payment" for each person as they hand you their contribution. Anyone who hasn\'t paid yet (tagged as missing) shows up clearly — nothing slips through. Money still moves the way it always has — cash, bank transfer, whatever you prefer.'
          },
          {
            num: 4, label: 'STEP 04', title: 'Pay out the pot',
            desc: 'Once everyone has chipped in for the round, tap "Mark as paid out" for whoever\'s turn it is. The next person in the queue moves up automatically, and the round resets. Repeat for the next payment day.'
          },
          {
            num: 5, label: 'STEP 05', title: 'Keep going until everyone has had a turn',
            desc: 'When every participant has received the pot once, the pardna is complete. Trust scores update for everyone based on how reliably they paid, the full history is saved, and you can start a fresh pardna with the same crew in one tap.'
          },
        ].map((step) => (
          <div key={step.num} className="flex gap-4">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm">
              {step.num}
            </div>
            <div>
              <p className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-0.5">
                {step.label}
              </p>
              <h3 className="text-base font-bold text-[var(--color-text)] mb-1">{step.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}

      </div>

      {/* Tips box */}
      <div className="border border-[var(--color-border)] rounded-xl p-5 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[var(--color-primary)]">↓</span>
          <p className="text-sm font-semibold text-[var(--color-text)]">Tips from experienced bankers</p>
        </div>
        <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
          {[
            'Set expectations on day one. Spell out the rules in writing so there are no surprises.',
            'Don\'t let one missed payment slide. Flag it the same day — small problems grow fast.',
            'Use the participant diary to keep notes on who is reliable and who needs a nudge.',
            'Only invite people you\'d lend money to. A pardna is built on trust, not luck.',
            'Confirm payouts with the recipient (text, voice note, anything) so there\'s a paper trail.',
          ].map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--color-primary)] mt-0.5 flex-shrink-0">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/dashboard/home')}
          className="w-full max-w-sm py-3.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all cursor-pointer"
          style={{ background: 'var(--color-primary)' }}
        >
          + Start your first pardna
        </button>
      </div>

    </div>
  );
}