# Crypto Price Tracker (Create React App)

A React app that polls live cryptocurrency prices from the free **CoinGecko**
API and plots a real-time price-history line chart. Built with **Create
React App**, for an internship project brief covering: live data fetching,
charting, a currency dropdown, Redux state management, and a mobile-friendly UI.

![tech](https://img.shields.io/badge/react-18-blue) ![tech](https://img.shields.io/badge/create--react--app-5-black) ![tech](https://img.shields.io/badge/redux--toolkit-2-purple) ![tech](https://img.shields.io/badge/recharts-2-green)

## Features

- **Live polling** — fetches market data for 5 coins (BTC, ETH, SOL, DOGE, ADA)
  every 10 seconds via `axios`, from CoinGecko's free, key-less REST API.
- **Real-time line chart** — `recharts` plots the selected coin's price over
  time, growing one point per poll, with a custom tooltip and a line color
  that flips between "up" and "down" based on the trend.
- **Currency dropdown** — switch which coin's chart/stats are shown.
- **Ticker strip** — a scrollable strip showing every tracked coin's price
  and 24h change at a glance; tapping an entry also switches the chart.
- **Redux Toolkit** — a single slice (`crypto`) owns the selected coin, the
  latest market data per coin, and the price-history arrays used by the chart.
- **Responsive layout** — two-column desktop layout collapses to a single
  column on mobile; the ticker strip scrolls horizontally on small screens.

## Tech stack

| Concern            | Library                          |
|---------------------|-----------------------------------|
| UI framework         | React 18                         |
| Build tool / tooling | Create React App (`react-scripts` 5) |
| State management    | Redux Toolkit + react-redux      |
| HTTP client          | axios                            |
| Charting             | Recharts                         |
| Data source           | [CoinGecko API](https://www.coingecko.com/en/api/documentation) (no key required) |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm start

# 3. Build for production
npm run build
```

No API key or `.env` file is needed — CoinGecko's `/coins/markets` endpoint
is free and public.

> This project was bootstrapped with the standard Create React App layout
> (`public/index.html`, `src/index.js`, `src/App.js`) rather than Vite —
> the same code, using `react-scripts` for the dev server and build.

## Project structure

```
crypto-tracker-cra/
├── public/
│   └── index.html               CRA HTML template (#root mount point)
├── package.json                 react-scripts start/build/test/eject
└── src/
    ├── index.js                  Mounts <App/> with the Redux <Provider>
    ├── App.js                    Layout, polling interval (setInterval)
    ├── App.css                   Component/layout styles + responsive rules
    ├── index.css                 Global reset + design tokens (CSS vars)
    ├── api/
    │   └── coingeckoApi.js       axios wrapper around CoinGecko + coin list
    ├── store/
    │   ├── store.js              Redux store setup (configureStore)
    │   └── cryptoSlice.js        State, async thunk, reducers, selectors
    └── components/
        ├── Header.js             Title + live/refreshing status indicator
        ├── TickerStrip.js        Scrollable strip of all tracked coins
        ├── CurrencySelector.js   Dropdown bound to Redux selected coin
        ├── PriceCard.js          Stat card for the selected coin
        └── PriceChart.js         Recharts line chart of price history
```

Every file above has a docblock at the top explaining its role, and the
non-trivial functions have inline JSDoc comments — open any file in
`src/` for page-level documentation alongside the code.

## How the data flow works

1. On mount, `App.js` dispatches the `fetchPrices` thunk immediately, then
   again every 10 seconds via `setInterval` (cleaned up on unmount).
2. `fetchPrices` (in `store/cryptoSlice.js`) calls `fetchMarketData` (in
   `api/coingeckoApi.js`), which hits CoinGecko's `/coins/markets` endpoint
   for all 5 supported coins in a single request.
3. On success, the reducer updates `state.crypto.coins[coinId]` with the
   latest snapshot, and appends `{ time, price }` to
   `state.crypto.history[coinId]` (capped at 180 points so memory doesn't
   grow unbounded over a long session).
4. Components read state via memoized selectors (`selectCoinData`,
   `selectCoinHistory`, etc.) exported from `cryptoSlice.js`, so no component
   needs to know the store's exact shape.
5. Choosing a coin (dropdown or ticker strip) dispatches `selectCoin`, which
   simply updates `state.crypto.selectedCoin` — every component reading the
   "selected coin" data re-renders with the new coin's data/history.

## Customizing

- **Track different coins**: edit `SUPPORTED_COINS` in
  `src/api/coingeckoApi.js`. Use any valid CoinGecko coin id (see their
  [`/coins/list`](https://api.coingecko.com/api/v3/coins/list) endpoint).
- **Change the poll interval**: edit `POLL_INTERVAL_MS` in `src/App.js`.
  Keep in mind CoinGecko's free tier is rate-limited (roughly 10–30 calls/min
  depending on plan), so avoid setting this too low.
- **Change the price/vs currency**: `fetchMarketData` defaults to `usd`;
  pass a different [supported vs_currency](https://api.coingecko.com/api/v3/simple/supported_vs_currencies)
  if needed.

## Notes / possible next steps

- CoinGecko's free tier can rate-limit aggressive polling; if you see
  `429` errors in the console, increase `POLL_INTERVAL_MS`.
- The chart resets its in-memory history on a full page reload (it's not
  persisted to `localStorage` or a backend) — that's intentional for this
  scope, but would be a natural next feature to add.
- CRA (`react-scripts`) is in maintenance mode upstream; this still works
  fine for coursework/internship projects, but for new production apps
  consider Vite (a Vite version of this same project is also available).
