import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div
      className={'container flex flex-col h-screen mx-auto bg-gradient-to-top from-gray-400 via-gray-50 to-slate-100 '}
    >
      <App />
    </div>
  </React.StrictMode>
);
