import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './rounters/AppRouter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
