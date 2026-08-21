/**
 * components/CurrencySelector.js
 * -----------------------------------------------------------------------
 * A <select> dropdown for choosing which coin's chart to display. Reads
 * the current selection from Redux and dispatches `selectCoin` on change,
 * so this component has no local state of its own.
 * -----------------------------------------------------------------------
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUPPORTED_COINS } from '../api/coingeckoApi';
import { selectCoin, selectSelectedCoinId } from '../store/cryptoSlice';

export default function CurrencySelector() {
  const dispatch = useDispatch();
  const selectedCoinId = useSelector(selectSelectedCoinId);

  return (
    <label className="currency-selector">
      <span className="currency-selector__label">Chart coin</span>
      <select
        className="currency-selector__select"
        value={selectedCoinId}
        onChange={(e) => dispatch(selectCoin(e.target.value))}
      >
        {SUPPORTED_COINS.map(({ id, symbol, name }) => (
          <option key={id} value={id}>
            {name} ({symbol})
          </option>
        ))}
      </select>
    </label>
  );
}
