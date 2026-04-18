import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Global providers wrapper.
 * Add React Query, theme, or auth providers here as needed.
 */
export default function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
