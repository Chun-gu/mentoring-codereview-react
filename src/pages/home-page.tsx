import { NavLink } from 'react-router-dom';

import StarIconFilled from '@/assets/icon-star-filled.svg';
import StarIconOutlined from '@/assets/icon-star-outlined.svg';
import TicketIcon from '@/assets/icon-ticket-filled.svg';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="sr-only">전시회 목록</h1>
      </header>

      <main>
        <ul className="flex flex-col gap-2 p-2">
          <li className="flex gap-[10px]">
            <img
              src="https://artvelop.s3.ap-northeast-2.amazonaws.com/code-review/light/1.jpeg"
              alt=""
              className="size-20 rounded object-cover"
            />
            <div className="relative flex flex-grow">
              <dl className="flex flex-grow flex-col justify-between">
                <div className="flex flex-col gap-[2px]">
                  <dt className="sr-only">전시회 이름</dt>
                  <dd className="text-md font-bold leading-xs text-gray-1a">전시회 제목</dd>

                  <dt className="sr-only">장소</dt>
                  <dd className="text-sm font-regular leading-xs text-gray-99">
                    그라운드 시소 센트럴( 장소 이름 )
                  </dd>

                  <dt className="sr-only">가격</dt>
                  <dd className="text-sm font-semibold leading-xs text-orange">5,000원</dd>
                </div>
                <div>
                  <dt className="sr-only">전시 기간</dt>
                  <dd className="text-xs leading-xs text-gray-3f">2023.07.24 ~ 2023.08.28</dd>
                </div>
              </dl>

              <button className="absolute right-0 top-0 text-sm font-semibold text-orange">
                <img src={StarIconOutlined} alt="찜하기" />
              </button>
              <button className="leading-none absolute bottom-0 right-0 h-4 w-10 rounded-sm bg-gray-1a text-xs font-regular text-white">
                예매하기
              </button>
            </div>
          </li>
        </ul>
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
