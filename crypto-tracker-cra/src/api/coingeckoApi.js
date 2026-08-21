/**
 * api/coingeckoApi.js
 * -----------------------------------------------------------------------
 * Thin wrapper around the free CoinGecko public REST API, built with axios.
 *
 * CoinGecko requires no API key for its free tier, which makes it a good
 * fit for this project. Docs: https://www.coingecko.com/en/api/documentation
 *
 * Exposes a single function, `fetchMarketData`, used by the Redux thunk in
 * `store/cryptoSlice.js` to poll live prices.
 * -----------------------------------------------------------------------
 */

import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

// A shared axios instance keeps the base URL and default headers in one place.
const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

/**
 * Fetch current market data (price, market cap, 24h change, etc.) for a
 * list of coin ids.
 *
 * @param {string[]} coinIds - CoinGecko coin ids, e.g. ['bitcoin', 'ethereum'].
 * @param {string} vsCurrency - Currency to price against, e.g. 'usd'.
 * @returns {Promise<Array>} Array of market data objects, one per coin.
 *
 * Example response item (trimmed):
 * {
 *   id: 'bitcoin',
 *   symbol: 'btc',
 *   name: 'Bitcoin',
 *   current_price: 65000,
 *   price_change_percentage_24h: 1.23,
 *   image: 'https://...png'
 * }
 */
export async function fetchMarketData(coinIds, vsCurrency = 'usd') {
  const response = await client.get('/coins/markets', {
    params: {
      vs_currency: vsCurrency,
      ids: coinIds.join(','),
      order: 'market_cap_desc',
      per_page: coinIds.length,
      page: 1,
      sparkline: false,
    },
  });
  return response.data;
}

/**
 * List of coins tracked by this app. Add/remove entries here to change
 * what shows up in the currency selector dropdown.
 */
export const SUPPORTED_COINS = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
  { id: 'solana', symbol: 'SOL', name: 'Solana' },
  { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin' },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano' },
];
