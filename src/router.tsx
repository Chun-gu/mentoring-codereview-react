import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout';
import Home from '@/pages/home-page';
import TicketingPage from '@/pages/ticketing-page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ticketing/:exhibitionId" element={<TicketingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
