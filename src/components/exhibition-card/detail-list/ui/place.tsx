import type { ComponentPropsWith } from '@/types';

import { useExhibitionDetailContext } from '../use-exhibition-detail-context';

type PlaceProps = ComponentPropsWith<'dd', 'noChildren'>;

export function Place(props: PlaceProps) {
  const { place } = useExhibitionDetailContext('Place');

  return (
    <>
      <dt className="sr-only">장소</dt>
      <dd {...props}>{place}</dd>
    </>
  );
}
