/**
 * components/Header.js
 * -----------------------------------------------------------------------
 * Top banner: app title plus a small "live" indicator that shows whether
 * the last poll succeeded, is in flight, or failed, and how long ago the
 * data was last refreshed.
 *
 * Props:
 *   status      {'idle'|'loading'|'succeeded'|'failed'} current fetch status
 *   lastUpdated {number|null} timestamp (ms) of the last successful fetch
 * -----------------------------------------------------------------------
 */

import React, { useEffect, useState } from 'react';

function timeAgo(timestamp) {
  if (!timestamp) return '—';
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 2) return 'just now';
  if (seconds < 60) return `${seconds}s ago`;
  return `${Math.floor(seconds / 60)}m ago`;
}

export default function Header({ status, lastUpdated }) {
  // Re-render every second so the "Xs ago" label stays fresh.
  const [, forceTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => forceTick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const dotClass =
    status === 'failed' ? 'status-dot status-dot--error' : 'status-dot status-dot--live';

  return (
    <header className="app-header">
      <div className="app-header__title">
        <span className="app-header__mark">₿</span>
        <div>
          <h1>Crypto Price Tracker</h1>
          <p className="app-header__subtitle">Live market data, polled every 10s</p>
        </div>
      </div>
      <div className="app-header__status">
        <span className={dotClass} aria-hidden="true" />
        <span>
          {status === 'loading' ? 'Refreshing…' : `Updated ${timeAgo(lastUpdated)}`}
        </span>
      </div>
    </header>
  );
}
