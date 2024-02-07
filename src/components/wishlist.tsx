import { useGetWishesQuery } from '@/hooks/useExhibition';

import NoWishes from './NoWishes';
import WishCard from './wish-card';

export default function Wishlist() {
  const wishes = useGetWishesQuery();

  return wishes?.length === 0 ? (
    <NoWishes />
  ) : (
    <ul className="flex flex-col gap-2 p-2">
      {wishes?.map((wish) => (
        <li key={wish.id} className="contents">
          <WishCard exhibition={wish} />
        </li>
      ))}
    </ul>
  );
}
