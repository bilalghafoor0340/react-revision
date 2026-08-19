import React from 'react'

const CartSummary = ({ totalItems, totalAmount, dispatch }) => {
    return (
        <div>
            <p>Total Items: {totalItems}</p>
            <p>Total Amount: {totalAmount}</p>

            <button
                onClick={() =>
                    dispatch({
                        type: "CLEAR_CART"
                    })
                }
            >
                Clear Cart
            </button>
        </div>
    )
}

export default CartSummary