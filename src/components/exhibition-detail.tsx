import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import StarIconFilled from '@/assets/icon-star-filled.svg';
import StarIconOutlined from '@/assets/icon-star-outlined.svg';
import {
  useAddWishMutation,
  useDeleteWishMutation,
  useGetExhibitionQuery,
} from '@/hooks/useExhibition';

import { Dialog, DialogClose, DialogOpen } from './dialog';
import {
  DetailList,
  Duration,
  ExhibitionCard,
  Image,
  Place,
  Price,
  Title,
} from './exhibition-card';

export default function ExhibitionDetail() {
  const exhibitionId = Number(useParams().exhibitionId);

  const exhibition = useGetExhibitionQuery(exhibitionId);

  const { addWish } = useAddWishMutation();
  const { deleteWish } = useDeleteWishMutation();

  async function handleClickWish() {
    exhibition?.isWished ? deleteWish(exhibitionId) : addWish(exhibitionId);
  }

  const dialogRef = useRef<HTMLDialogElement>(null);

  if (!exhibition) return <></>;

  return (
    <>
      <ExhibitionCard exhibition={exhibition}>
        <Image alt={exhibition.title} className="size-full object-cover" />

        <div className="p-3">
          <div className="relative mb-4">
            <DetailList>
              <Title className="mb-2 text-3xl font-semibold leading-xs text-gray-1a" />
              <Price className="mb-4 text-xl font-semibold leading-xs text-red" />
              <Place className="mb-0.5 text-md font-semibold leading-xs text-gray-1a" />
              <Duration className="text-md font-semibold leading-xs text-gray-1a" />
            </DetailList>

            <button onClick={handleClickWish} className="absolute bottom-0 right-0 h-8 w-8">
              {exhibition?.isWished ? (
                <img src={StarIconFilled} alt="찜 취소하기" className="size-full" />
              ) : (
                <img src={StarIconOutlined} alt="찜 하기" className="size-full" />
              )}
            </button>
          </div>

          <DialogOpen
            target={dialogRef}
            className="w-full rounded-sm bg-yellow py-4 text-xl font-semibold leading-xs text-white"
          >
            예매하기
          </DialogOpen>
        </div>
      </ExhibitionCard>

      <Dialog
        ref={dialogRef}
        className="animate-fade-out rounded-sm p-2 backdrop:animate-fade-out backdrop:bg-black/50 open:animate-fade-in open:backdrop:animate-fade-in"
      >
        <div className="flex flex-col gap-2">
          <div className="flex h-[100px] w-[250px] flex-col items-center justify-center text-center text-md font-medium leading-lg text-gray-1a">
            <p>티켓을 예매하시겠습니까?</p>
            <p>예매 내역은 이메일로 전송됩니다.</p>
          </div>

          <button className="w-full rounded-sm bg-yellow py-2 text-md font-medium leading-xs text-white">
            확인
          </button>
          <DialogClose className="w-full rounded-sm bg-gray-d9 py-2 text-md font-medium leading-xs text-white">
            취소
          </DialogClose>
        </div>
      </Dialog>

      {/* <dialog ref={alertRef} className="flex flex-col gap-2 rounded-sm p-2 backdrop:bg-black/50">
        <div className="flex h-[100px] w-[250px] flex-col items-center justify-center text-center text-md font-medium leading-lg text-gray-1a">
          <p>예매가 완료되었습니다.</p>
        </div>
        <button className="w-full rounded-sm bg-yellow py-2 text-md font-medium leading-xs text-white">
        확인
        </button>
      </dialog> */}
    </>
  );
}
