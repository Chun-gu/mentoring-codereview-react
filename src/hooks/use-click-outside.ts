import { useCallback, useEffect } from 'react';

import type { RefObject } from 'react';

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: (...args: unknown[]) => unknown,
) {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!e.currentTarget || !(e.currentTarget instanceof Element)) return;

      const { clientX, clientY } = e;
      const { top, left, bottom, right } = e.currentTarget.getBoundingClientRect();

      const isOutside = clientX < left || right < clientX || clientY < top || bottom < clientY;

      if (isOutside) onClickOutside();
    },
    [onClickOutside],
  );

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    element.addEventListener('click', handleClickOutside);

    return () => {
      element.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside, ref]);
}
