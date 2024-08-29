import { Link } from 'react-router-dom';

import BackwardIcon from '@/assets/icon-backward.svg';
import ExhibitionDetail from '@/components/exhibition-detail';

export default function TicketingPage() {
  return (
    <>
      <header className="flex h-16 items-center gap-3 border-b border-b-gray-f4 px-3">
        <Link to=".." className="flex h-11 w-11 items-center justify-center">
          <img src={BackwardIcon} alt="뒤로 가기" />
        </Link>
        <h1 className="text-lg font-semibold leading-sm text-black">예매하기</h1>
      </header>

      <main>
        <ExhibitionDetail />
      </main>
    </>
  );
}
