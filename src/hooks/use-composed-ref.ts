import { useCallback, useEffect, useRef } from 'react';

import type { ForwardedRef, MutableRefObject } from 'react';

export function useComposedRef<T>(forwardedRef: ForwardedRef<T>) {
  const composedRef = useRef<T>(null);

  useEffect(() => {
    if (!forwardedRef) return;

    if (typeof forwardedRef === 'function') {
      forwardedRef(composedRef.current);
    } else {
      forwardedRef.current = composedRef.current;
    }
  }, [forwardedRef]);

  return composedRef;
}

// export function useComposedRef<T>(ref: MutableRefObject<T>, forwardedRef: ForwardedRef<T>) {
//   return useCallback(
//     (node: T) => {
//       ref.current = node;

//       if (typeof forwardedRef === 'function') forwardedRef(node);
//       else if (forwardedRef) forwardedRef.current = node;
//     },
//     [forwardedRef, ref],
//   );
// }
