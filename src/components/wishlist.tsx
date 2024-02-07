import { useGetWishesQuery } from '@/hooks/useExhibition';

import ExhibitionCard from './exhibition-card';
import NoWishes from './NoWishes';

export default function Wishlist() {
  const wishes = useGetWishesQuery();

  return wishes?.length === 0 ? (
    <NoWishes />
  ) : (
    <ul className="flex flex-col gap-2 p-2">
      {wishes?.map((wish) => (
        <li key={wish.id} className="contents">
          <ExhibitionCard exhibition={wish} />
        </li>
      ))}
    </ul>
  );
}
