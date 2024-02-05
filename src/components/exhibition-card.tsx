import StarIconFilled from '@/assets/icon-star-filled.svg';
import StarIconOutlined from '@/assets/icon-star-outlined.svg';
import type { Exhibition } from '@/types/exhibition-type';

type ExhibitionCardProps = {
  exhibition: Exhibition;
};

// TODO: refactor to composition component
export default function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  const {
    id,
    title,
    imageUrl,
    place,
    price,
    date: { started, ended },
  } = exhibition;

  return (
    <div className="flex gap-[10px]">
      <img src={imageUrl} alt={title} className="size-20 rounded object-cover" />
      <div className="relative flex flex-grow">
        <dl className="flex flex-grow flex-col justify-between">
          <div className="flex flex-col gap-[2px]">
            <dt className="sr-only">전시회 이름</dt>
            <dd className="text-md font-bold leading-xs text-gray-1a">{title}</dd>

            <dt className="sr-only">장소</dt>
            <dd className="text-sm font-regular leading-xs text-gray-99">{place}</dd>

            <dt className="sr-only">가격</dt>
            <dd className="text-sm font-semibold leading-xs text-orange">{price}원</dd>
          </div>
          <div>
            <dt className="sr-only">전시 기간</dt>
            <dd className="text-xs leading-xs text-gray-3f">
              {started} ~ {ended}
            </dd>
          </div>
        </dl>

        <button className="absolute right-0 top-0 text-sm font-semibold text-orange">
          <img src={StarIconOutlined} alt="찜하기" />
        </button>
        <button className="leading-none absolute bottom-0 right-0 h-4 w-10 rounded-sm bg-gray-1a text-xs font-regular text-white">
          예매하기
        </button>
      </div>
    </div>
  );
}
