import { Button } from '@/components/ui/Button';

import type { ReactNode } from 'react';

type TicketButtonProps = {
  children: ReactNode;
};

export function TicketButton({ children }: TicketButtonProps) {
  return <Button>{children}</Button>;
}
