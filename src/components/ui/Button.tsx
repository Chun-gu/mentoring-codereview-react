import { Children, cloneElement, isValidElement } from 'react';

import type { ComponentProps, ReactNode } from 'react';

type ButtonProps =
  | ({ asChild?: false } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode };

export function Button({ asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return <Component {...props} />;
}

type SlotProps = { children?: ReactNode };

function Slot({ children }: SlotProps) {
  if (Children.count(children) > 1) {
    throw new Error('Only one child allowed');
  }

  if (isValidElement(children)) {
    return cloneElement(children);
  }

  return null;
}
