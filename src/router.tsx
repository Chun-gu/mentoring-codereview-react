import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout';
import HomePage from '@/pages/home-page';
import TicketingPage from '@/pages/ticketing-page';
import WishlistPage from '@/pages/wishlist-page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/ticketing/:exhibitionId" element={<TicketingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
