import type { ComponentPropsWith } from '@/types';

import { useExhibitionDetailContext } from '../use-exhibition-detail-context';

type PriceProps = ComponentPropsWith<'dd', 'noChildren'>;

export function Price(props: PriceProps) {
  const { price } = useExhibitionDetailContext('Price');

  return (
    <>
      <dt className="sr-only">가격</dt>
      <dd {...props}>{price}원</dd>
    </>
  );
}
