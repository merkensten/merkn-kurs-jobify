import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './assets/css/index.css';
import App from './App';
import { AppProvider } from './exports/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
