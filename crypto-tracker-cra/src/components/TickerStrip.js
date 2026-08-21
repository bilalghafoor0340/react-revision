/**
 * components/TickerStrip.js
 * -----------------------------------------------------------------------
 * Horizontal, horizontally-scrollable strip showing a compact snapshot of
 * every tracked coin (symbol, price, 24h change). This is the app's
 * signature element: it echoes the scrolling ticker tape you'd see on a
 * real exchange or trading terminal, and doubles as a quick way to jump
 * between coins by tapping an entry.
 *
 * Props:
 *   coins        {object} map of coinId -> latest market data
 *   selectedCoin {string} currently selected coin id
 *   onSelect     {function(coinId: string): void} called when an entry is tapped
 * -----------------------------------------------------------------------
 */

import React from 'react';
import { SUPPORTED_COINS } from '../api/coingeckoApi';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
});

export default function TickerStrip({ coins, selectedCoin, onSelect }) {
  return (
    <div className="ticker-strip" role="tablist" aria-label="Tracked coins">
      {SUPPORTED_COINS.map(({ id, symbol }) => {
        const coin = coins[id];
        const change = coin?.price_change_percentage_24h ?? 0;
        const isPositive = change >= 0;
        const isActive = id === selectedCoin;

        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            className={`ticker-item ${isActive ? 'ticker-item--active' : ''}`}
            onClick={() => onSelect(id)}
          >
            <span className="ticker-item__symbol">{symbol}</span>
            <span className="ticker-item__price">
              {coin ? currencyFormatter.format(coin.current_price) : '—'}
            </span>
            <span
              className={`ticker-item__change ${
                isPositive ? 'ticker-item__change--up' : 'ticker-item__change--down'
              }`}
            >
              {coin ? `${isPositive ? '▲' : '▼'} ${Math.abs(change).toFixed(2)}%` : ''}
            </span>
          </button>
        );
      })}
    </div>
  );
}
