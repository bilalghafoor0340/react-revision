/**
 * store/store.js
 * -----------------------------------------------------------------------
 * Configures the single Redux store for the app using Redux Toolkit's
 * `configureStore`, which wires up the Redux DevTools extension and
 * sensible default middleware automatically.
 *
 * Only one slice is needed for this app ("crypto"), but the store is
 * structured so more slices (e.g. "settings", "auth") could be added
 * later without changing how components consume it.
 * -----------------------------------------------------------------------
 */

import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
