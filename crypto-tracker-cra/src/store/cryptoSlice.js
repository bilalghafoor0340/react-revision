/**
 * store/cryptoSlice.js
 * -----------------------------------------------------------------------
 * Redux Toolkit "slice" that owns all crypto-related state:
 *   - the list of coins and their latest market data
 *   - which coin is currently selected in the dropdown
 *   - the price history (per coin) used to draw the line chart
 *   - loading / error status for the polling requests
 *
 * The actual network call lives in `fetchPrices`, an async thunk created
 * with `createAsyncThunk`. The component `PriceChart` dispatches this thunk
 * every X seconds (see the interval in App.jsx) to poll for fresh data.
 * -----------------------------------------------------------------------
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMarketData, SUPPORTED_COINS } from '../api/coingeckoApi';

// Cap how many points we keep per coin so the chart / memory don't grow
// forever during a long session (e.g. 10s interval * 180 = 30 minutes).
const MAX_HISTORY_POINTS = 180;

/**
 * Async thunk: fetches live market data for every supported coin.
 * Dispatch this on an interval to poll for updates.
 *
 * Redux Toolkit automatically turns this into three action types:
 *   fetchPrices.pending | fetchPrices.fulfilled | fetchPrices.rejected
 */
export const fetchPrices = createAsyncThunk(
  'crypto/fetchPrices',
  async (_, { rejectWithValue }) => {
    try {
      const coinIds = SUPPORTED_COINS.map((c) => c.id);
      const data = await fetchMarketData(coinIds, 'usd');
      return data;
    } catch (err) {
      // Normalize the error so the reducer/UI gets a plain message string.
      return rejectWithValue(err.message || 'Failed to fetch prices');
    }
  }
);

const initialState = {
  selectedCoin: 'bitcoin', // currently selected coin id, drives the chart + dropdown
  coins: {},               // { [coinId]: latest market data object from CoinGecko }
  // { [coinId]: [{ time: number, price: number }, ...] }
  history: Object.fromEntries(SUPPORTED_COINS.map((c) => [c.id, []])),
  status: 'idle',          // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  lastUpdated: null,       // timestamp (ms) of the last successful fetch
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    /**
     * Changes which coin is shown in the chart. The dropdown in
     * `CurrencySelector.jsx` dispatches this action.
     */
    selectCoin(state, action) {
      state.selectedCoin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrices.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPrices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const now = Date.now();
        state.lastUpdated = now;

        action.payload.forEach((coin) => {
          state.coins[coin.id] = coin;

          if (!state.history[coin.id]) {
            state.history[coin.id] = [];
          }

          state.history[coin.id].push({
            time: now,
            price: coin.current_price,
          });

          // Trim old points so history doesn't grow without bound.
          if (state.history[coin.id].length > MAX_HISTORY_POINTS) {
            state.history[coin.id].shift();
          }
        });
      })
      .addCase(fetchPrices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { selectCoin } = cryptoSlice.actions;

// --- Selectors -----------------------------------------------------------
// Small helper functions to read derived state from components, so the
// components don't need to know the shape of the store.

export const selectSelectedCoinId = (state) => state.crypto.selectedCoin;
export const selectCoinData = (coinId) => (state) => state.crypto.coins[coinId];
export const selectCoinHistory = (coinId) => (state) =>
  state.crypto.history[coinId] || [];
export const selectStatus = (state) => state.crypto.status;
export const selectError = (state) => state.crypto.error;
export const selectLastUpdated = (state) => state.crypto.lastUpdated;

export default cryptoSlice.reducer;
