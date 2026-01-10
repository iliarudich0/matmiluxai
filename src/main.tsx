import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './ui/App';
import './styles.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Missing #root');
}

const page = rootEl.getAttribute('data-page') ?? 'home';

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App page={page} />
  </React.StrictMode>
);
