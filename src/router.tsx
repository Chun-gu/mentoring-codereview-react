import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout';
import Home from '@/pages/home-page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
