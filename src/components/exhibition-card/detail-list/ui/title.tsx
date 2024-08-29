import type { ComponentPropsWith } from '@/types';

import { useExhibitionDetailContext } from '../use-exhibition-detail-context';

type TitleProps = ComponentPropsWith<'dd', 'noChildren'>;

export function Title(props: TitleProps) {
  const { title } = useExhibitionDetailContext('Title');

  return (
    <>
      <dt className="sr-only">전시회 제목</dt>
      <dd {...props}>{title}</dd>
    </>
  );
}
