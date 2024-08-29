import { useContext } from 'react';

import { ExhibitionDetailContext } from '.';

export function useExhibitionDetailContext(componentName: string) {
  const detail = useContext(ExhibitionDetailContext);

  if (detail === undefined) {
    throw new Error(`${componentName} 컴포넌트는 DetailList 컴포넌트의 자식이어야 합니다.`);
  }

  return detail;
}
