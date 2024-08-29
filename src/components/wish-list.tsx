import { useGetWishesQuery } from '@/hooks/useExhibition';

import WishListEmpty from './wish-list-empty';
import WishListItem from './wish-list-item';

export default function Wishlist() {
  const wishes = useGetWishesQuery();

  return wishes?.length === 0 ? (
    <WishListEmpty />
  ) : (
    <ul className="flex h-full flex-col gap-2 overflow-y-auto p-2">
      {wishes?.map((wish) => <WishListItem key={wish.id} wish={wish} />)}
    </ul>
  );
}
