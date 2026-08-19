import React from 'react'
import CartItem from './CartItem'

const Cart = ({ items, dispatch }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>

            {items.length > 0 ? (
                items.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        dispatch={dispatch}
                    />
                ))
            ) : (
                <p>Your cart is empty 🛒</p>
            )}
        </div>
    )
}

export default Cart