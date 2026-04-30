export interface NewPardnaFormData {
  /* Step 1 – Basics */
  name: string;
  description: string;
  contributionAmount: string;
  frequency: 'Weekly' | 'Fortnightly' | 'Monthly' | '';
  startDate: string;

  /* Step 2 – Rules */
  numberOfParticipants: string;
  payoutOrder: 'Fixed rotation' | 'Random draw' | 'Bidding' | '';
  rulesNotes: string;

  /* Step 3 – Participants */
  participants: ParticipantEntry[];
  confirmed: boolean;
}

export interface ParticipantEntry {
  id: number;
  name: string;
  phone: string;
}

export const STEP_LABELS = ['Basics', 'Rules', 'Participants', 'Review', 'Done'] as const;
export type StepIndex = 0 | 1 | 2 | 3 | 4;

export const INITIAL_FORM: NewPardnaFormData = {
  name: '',
  description: '',
  contributionAmount: '',
  frequency: '',
  startDate: '',
  numberOfParticipants: '',
  payoutOrder: '',
  rulesNotes: '',
  participants: [
    { id: 1, name: '', phone: '' },
    { id: 2, name: '', phone: '' },
    { id: 3, name: '', phone: '' },
  ],
  confirmed: false,
};
