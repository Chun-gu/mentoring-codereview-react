import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-gray-f4 min-h-screen">
      <div className="w-screen-mobile h-screen-mobile mx-auto bg-white">
        <Outlet />
      </div>
    </div>
  );
}
