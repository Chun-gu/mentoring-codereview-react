import type { ComponentPropsWith } from '@/types';

import { useExhibitionDetailContext } from '../use-exhibition-detail-context';

type DateProps = ComponentPropsWith<'dd', 'noChildren'>;

export function Duration(props: DateProps) {
  const {
    date: { started, ended },
  } = useExhibitionDetailContext('Duration');

  return (
    <>
      <dt className="sr-only">전시 기간</dt>
      <dd {...props}>
        {started} ~ {ended}
      </dd>
    </>
  );
}
