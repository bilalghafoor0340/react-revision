import React from 'react'

const CryptoCard = ({crypto}) => {
  return (
    <div>
       <p>{crypto.name}</p>
       <p>{crypto.symbol.toUpperCase()}</p>
       <p>{crypto.current_price}</p>
       <p>{crypto.price_change_percentage_24h.toFixed(2)}</p>
    </div>
  )
}

export default CryptoCard