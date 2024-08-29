/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

import type { ComponentPropsWith } from '@/types';
import type { Exhibition } from '@/types/exhibition-type';

import { Duration } from './ui/duration';
import { Place } from './ui/place';
import { Price } from './ui/price';
import { Title } from './ui/title';
import { useExhibitionContext } from '../use-exhibition-context';

type ExhibitionDetailContextType = Pick<Exhibition, 'title' | 'place' | 'price' | 'date'>;

export const ExhibitionDetailContext = createContext<ExhibitionDetailContextType | undefined>(
  undefined,
);

type DetailListProps = ComponentPropsWith<'dl', 'noRef', 'children'>;

function DetailList({ children, ...restProps }: DetailListProps) {
  const { title, place, price, date } = useExhibitionContext('DetailList');

  return (
    <ExhibitionDetailContext.Provider value={{ title, place, price, date }}>
      <dl {...restProps}>{children}</dl>
    </ExhibitionDetailContext.Provider>
  );
}

export { DetailList, Title, Place, Price, Duration };
