import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from '@app/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className='bg-neutral-50 app-wrapp'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

