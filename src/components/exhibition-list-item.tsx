import { Link } from 'react-router-dom';

import StarIconFilled from '@/assets/icon-star-filled.svg';
import StarIconOutlined from '@/assets/icon-star-outlined.svg';
import { useAddWishMutation, useDeleteWishMutation } from '@/hooks/useExhibition';
import type { Exhibition } from '@/types/exhibition-type';

import { Duration, ExhibitionCard, Image, Place, Price, Title } from './exhibition-card';
import { DetailList } from './exhibition-card/detail-list';

type ExhibitionListItemProps = { exhibition: Exhibition };

export default function ExhibitionListItem({ exhibition }: ExhibitionListItemProps) {
  const { addWish } = useAddWishMutation();
  const { deleteWish } = useDeleteWishMutation();

  async function handleClickWish() {
    exhibition.isWished ? deleteWish(exhibition.id) : addWish(exhibition.id);
  }

  return (
    <li className="flex gap-2.5">
      <ExhibitionCard exhibition={exhibition}>
        <Image alt={exhibition.title} className="size-20 rounded object-cover" />

        <div className="relative flex flex-grow">
          <DetailList className="flex flex-grow flex-col justify-between">
            <div className="flex flex-col gap-0.5">
              <Title className="text-md font-bold leading-xs text-gray-1a" />
              <Place className="text-sm font-regular leading-xs text-gray-99" />
              <Price className="text-sm font-semibold leading-xs text-orange" />
            </div>
            <div>
              <Duration className="text-xs leading-xs text-gray-3f" />
            </div>
          </DetailList>

          <button onClick={handleClickWish} className="absolute right-0 top-0">
            {exhibition.isWished ? (
              <img src={StarIconFilled} alt="찜 취소하기" />
            ) : (
              <img src={StarIconOutlined} alt="찜 하기" />
            )}
          </button>
          <Link
            to={`/ticketing/${exhibition.id}`}
            className="absolute bottom-0 right-0 flex h-4 w-10 items-center justify-center rounded-sm bg-gray-1a text-xs font-regular leading-none text-white"
          >
            예매하기
          </Link>
        </div>
      </ExhibitionCard>
    </li>
  );
}
