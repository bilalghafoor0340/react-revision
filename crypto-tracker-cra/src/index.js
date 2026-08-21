/**
 * index.js
 * -----------------------------------------------------------------------
 * Application entry point (standard Create React App entry file name).
 * Mounts <App /> into the #root div declared in public/index.html, and
 * wraps it with Redux's <Provider> so every component in the tree can
 * access the store via `useSelector` / `useDispatch`.
 * -----------------------------------------------------------------------
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
