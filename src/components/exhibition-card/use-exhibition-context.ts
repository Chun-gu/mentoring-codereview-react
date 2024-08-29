import { useContext } from 'react';

import { ExhibitionContext } from '.';

export function useExhibitionContext(componentName: string) {
  const exhibition = useContext(ExhibitionContext);

  if (exhibition === undefined) {
    throw new Error(`${componentName} 컴포넌트는 ExhibitionCard 컴포넌트의 자식이어야 합니다.`);
  }

  return exhibition;
}
