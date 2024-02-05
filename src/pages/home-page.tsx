import { NavLink } from 'react-router-dom';

import StarIconFilled from '@/assets/icon-star-filled.svg';
import TicketIcon from '@/assets/icon-ticket-filled.svg';
import ExhibitionList from '@/components/exhibition-list';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="sr-only">전시회 목록</h1>
      </header>

      <main>
        <ExhibitionList />
      </main>

      <footer className="shadow-1/2 absolute bottom-0 h-20 w-full pt-px shadow-gray-f4">
        <nav className="contents">
          <ul className="flex h-full">
            <li className="h-full flex-grow p-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? 'text-gray-1a' : 'text-gray-aa') +
                  ' flex h-full w-full flex-col items-center justify-center gap-1 text-sm font-regular leading-xs'
                }
              >
                <img src={TicketIcon} alt="" />
                전시회
              </NavLink>
            </li>
            <li className="flex-grow p-3">
              <NavLink
                to="/bookmark"
                className={({ isActive }) =>
                  (isActive ? 'text-gray-1a' : 'text-gray-aa') +
                  ' flex h-full w-full flex-col items-center justify-center gap-1 text-sm font-regular leading-xs'
                }
              >
                <img src={StarIconFilled} alt="" />
                찜목록
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
