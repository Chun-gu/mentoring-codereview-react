import { createContext } from 'react';

import type { Exhibition } from '@/types/exhibition-type';

import { DetailList, Duration, Place, Price, Title } from './detail-list';
import { Image } from './ui/image';
import { TicketButton } from './ui/ticket-button';
import { WishButton } from './ui/wish-button';

import type { ReactNode } from 'react';

type ExhibitionCardProps = { children: ReactNode; exhibition: Exhibition };

export const ExhibitionContext = createContext<Exhibition | undefined>(undefined);

function ExhibitionCard({ exhibition, children }: ExhibitionCardProps) {
  return <ExhibitionContext.Provider value={exhibition}>{children}</ExhibitionContext.Provider>;
}

export {
  ExhibitionCard,
  DetailList,
  Image,
  Title,
  Price,
  Place,
  Duration,
  WishButton,
  TicketButton,
};
