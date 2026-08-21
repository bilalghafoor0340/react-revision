/**
 * components/PriceCard.js
 * -----------------------------------------------------------------------
 * Shows the headline numbers for the currently-selected coin: current
 * price, 24h change, market cap and 24h volume. Purely presentational —
 * all data comes in via props, sourced from Redux in App.jsx.
 *
 * Props:
 *   coin {object|undefined} latest CoinGecko market data for the selected coin
 * -----------------------------------------------------------------------
 */

import React from 'react';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
});

const compactFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2,
});

export default function PriceCard({ coin }) {
  if (!coin) {
    return (
      <div className="price-card price-card--loading">
        <p>Loading price data…</p>
      </div>
    );
  }

  const change = coin.price_change_percentage_24h ?? 0;
  const isPositive = change >= 0;

  return (
    <div className="price-card">
      <div className="price-card__identity">
        {coin.image && <img src={coin.image} alt="" className="price-card__icon" />}
        <div>
          <h2>{coin.name}</h2>
          <span className="price-card__symbol">{coin.symbol?.toUpperCase()}</span>
        </div>
      </div>

      <div className="price-card__price">
        {currencyFormatter.format(coin.current_price)}
      </div>

      <div className={`price-card__change ${isPositive ? 'is-up' : 'is-down'}`}>
        {isPositive ? '▲' : '▼'} {Math.abs(change).toFixed(2)}% (24h)
      </div>

      <dl className="price-card__stats">
        <div>
          <dt>Market cap</dt>
          <dd>${compactFormatter.format(coin.market_cap)}</dd>
        </div>
        <div>
          <dt>24h volume</dt>
          <dd>${compactFormatter.format(coin.total_volume)}</dd>
        </div>
        <div>
          <dt>24h high</dt>
          <dd>{currencyFormatter.format(coin.high_24h)}</dd>
        </div>
        <div>
          <dt>24h low</dt>
          <dd>{currencyFormatter.format(coin.low_24h)}</dd>
        </div>
      </dl>
    </div>
  );
}
