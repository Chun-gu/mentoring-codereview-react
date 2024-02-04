import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from '@/components/provider';

import reportWebVitals from './reportWebVitals';
import Router from './router';

import './index.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') return;

  (await import('@/server')).worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider>
        <Router />
      </Provider>
    </React.StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
