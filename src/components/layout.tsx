import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-f4">
      <div className="relative mx-auto h-screen-mobile w-screen-mobile bg-white">
        <Outlet />
      </div>
    </div>
  );
}
