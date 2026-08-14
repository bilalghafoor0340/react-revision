import React, { useState } from 'react'


const ShoppingCard = () => {
    return (
    <div>
        <ProductCard/>
        <CardSummary/>
    </div>
    )
}



export default ShoppingCard

const ProductCard = () => {
    const [quantity, setQuantity] = useState(0);
  return (
    <div>
        <h3>Web Development Course</h3>
        <p>$49.99</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => setQuantity(quantity + 1)}>Add To Card</button>
    </div>
  )
}


export const CardSummary =() => {
    return (
        <div>
            <h3>Card Summary</h3>
            <p>Total Items:</p>
            <p>Total Price:</p>
        </div>
    )
}