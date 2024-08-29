import { Button } from '@/components/ui/Button';

import type { ReactNode } from 'react';

type WishButtonProps = { children: ReactNode };

export function WishButton({ children }: WishButtonProps) {
  return <Button>{children}</Button>;
}
