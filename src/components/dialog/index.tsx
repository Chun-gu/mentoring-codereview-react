import { ComponentProps, createContext, forwardRef, useCallback, useContext, useRef } from 'react';

import { useClickOutside } from '@/hooks/use-click-outside';
import { useComposedRef } from '@/hooks/use-composed-ref';
import type { ComponentPropsWith } from '@/types';

import type { RefObject } from 'react';

const DialogContext = createContext<RefObject<HTMLDialogElement> | undefined>(undefined);
function useDialogContext() {
  const dialog = useContext(DialogContext);
  if (!dialog) throw new Error('No');

  return dialog;
}

type DialogProps = ComponentPropsWith<'dialog', 'noRef'>;

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, ...restProps }, forwardedRef) => {
    const dialogRef = useComposedRef(forwardedRef);

    const closeDialog = useCallback(() => {
      dialogRef.current?.close();
    }, [dialogRef]);

    useClickOutside(dialogRef, closeDialog);

    return (
      <dialog ref={dialogRef} {...restProps}>
        <DialogContext.Provider value={dialogRef}>{children}</DialogContext.Provider>
      </dialog>
    );
  },
);

interface DialogOpenProps extends ComponentPropsWith<'button', 'noRef'> {
  target: RefObject<HTMLDialogElement>;
}

export const DialogOpen = forwardRef<HTMLButtonElement, DialogOpenProps>(
  ({ target, children, ...restProps }: DialogOpenProps) => {
    function handleClickOpen() {
      target.current?.showModal();
    }

    return (
      <button onClick={handleClickOpen} {...restProps}>
        {children}
      </button>
    );
  },
);

type DialogCloseProps = ComponentPropsWith<'button'>;

export function DialogClose({ onClick, children, ...restProps }: DialogCloseProps) {
  const dialog = useDialogContext();

  function handleClickClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (onClick) onClick(e);
    dialog.current?.close();
  }

  return (
    <button onClick={handleClickClose} {...restProps}>
      {children}
    </button>
  );
}

export function useDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  function open() {
    ref.current?.showModal();
  }

  function close() {
    ref.current?.close();
  }

  return { ref, open, close };
}
