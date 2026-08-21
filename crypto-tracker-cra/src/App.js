/**
 * App.js
 * -----------------------------------------------------------------------
 * Top-level layout. Responsibilities:
 *   1. Kick off the polling loop: dispatch `fetchPrices` immediately on
 *      mount, then again every POLL_INTERVAL_MS.
 *   2. Read the currently-selected coin's data/history from Redux.
 *   3. Compose the page from the presentational components.
 *
 * All state lives in Redux (see src/store/cryptoSlice.js); this component
 * only reads it via `useSelector` and starts the poll via `useDispatch`.
 * -----------------------------------------------------------------------
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPrices,
  selectCoin,
  selectCoinData,
  selectCoinHistory,
  selectError,
  selectLastUpdated,
  selectSelectedCoinId,
  selectStatus,
} from './store/cryptoSlice';
import Header from './components/Header';
import TickerStrip from './components/TickerStrip';
import CurrencySelector from './components/CurrencySelector';
import PriceCard from './components/PriceCard';
import PriceChart from './components/PriceChart';
import './App.css';

// How often to poll the API, in milliseconds. CoinGecko's free tier has a
// rate limit, so 10s is a reasonable default for a demo app.
const POLL_INTERVAL_MS = 10000;

export default function App() {
  const dispatch = useDispatch();

  const selectedCoinId = useSelector(selectSelectedCoinId);
  const coin = useSelector(selectCoinData(selectedCoinId));
  const history = useSelector(selectCoinHistory(selectedCoinId));
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const lastUpdated = useSelector(selectLastUpdated);
  const allCoins = useSelector((state) => state.crypto.coins);

  useEffect(() => {
    // Fetch immediately so the user isn't staring at an empty screen for
    // the first 10 seconds, then keep polling on an interval.
    dispatch(fetchPrices());
    const id = setInterval(() => dispatch(fetchPrices()), POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="app-shell">
      <Header status={status} lastUpdated={lastUpdated} />

      <TickerStrip
        coins={allCoins}
        selectedCoin={selectedCoinId}
        onSelect={(coinId) => dispatch(selectCoin(coinId))}
      />

      {error && (
        <div className="banner banner--error" role="alert">
          Couldn't refresh prices: {error}. Retrying on the next poll.
        </div>
      )}

      <main className="app-main">
        <section className="app-main__side">
          <CurrencySelector />
          <PriceCard coin={coin} />
        </section>

        <section className="app-main__chart">
          <div className="section-heading">
            <h2>{coin?.name ?? 'Price'} history</h2>
            <span className="section-heading__hint">Last {history.length} polls</span>
          </div>
          <PriceChart history={history} symbol={coin?.symbol?.toUpperCase() ?? ''} />
        </section>
      </main>

      <footer className="app-footer">
        Data from{' '}
        <a href="https://www.coingecko.com/en/api" target="_blank" rel="noreferrer">
          CoinGecko
        </a>{' '}
        · polled every {POLL_INTERVAL_MS / 1000}s
      </footer>
    </div>
  );
}
