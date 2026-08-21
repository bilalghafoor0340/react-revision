/**
 * components/PriceChart.js
 * -----------------------------------------------------------------------
 * Renders the price-history line chart for the currently-selected coin
 * using Recharts. The data itself lives in Redux (`state.crypto.history`)
 * and grows one point at a time as `fetchPrices` resolves on each poll —
 * this component just re-renders reactively when that array changes.
 *
 * Props:
 *   history {Array<{ time: number, price: number }>} price points, oldest first
 *   symbol  {string} coin symbol shown in the tooltip/axis, e.g. "BTC"
 * -----------------------------------------------------------------------
 */

import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
});

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__time">{timeFormatter.format(point.time)}</p>
      <p className="chart-tooltip__price">{priceFormatter.format(point.price)}</p>
    </div>
  );
}

export default function PriceChart({ history, symbol }) {
  // Recharts wants plain arrays; memoize so we don't remap on every render.
  const data = useMemo(
    () => history.map((point) => ({ ...point, label: timeFormatter.format(point.time) })),
    [history]
  );

  if (data.length < 2) {
    return (
      <div className="price-chart price-chart--empty">
        <p>Collecting live data for {symbol}… the chart will appear after a couple of polls.</p>
      </div>
    );
  }

  const firstPrice = data[0].price;
  const lastPrice = data[data.length - 1].price;
  const lineColor = lastPrice >= firstPrice ? 'var(--color-up)' : 'var(--color-down)';

  return (
    <div className="price-chart">
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-grid)" />
          <XAxis
            dataKey="label"
            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: 'var(--color-grid)' }}
            minTickGap={40}
          />
          <YAxis
            domain={['auto', 'auto']}
            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            width={70}
            tickFormatter={(value) => priceFormatter.format(value)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="price"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
