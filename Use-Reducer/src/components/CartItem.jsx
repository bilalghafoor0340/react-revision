import React from 'react'

const CartItem = ({ item, dispatch }) => {
    return (
        <div>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button
                onClick={() =>
                    dispatch({
                        type: "INCREASE_ITEM",
                        payload: item.id
                    })
                }
            >
                +
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "DECREASE_ITEM",
                        payload: item.id
                    })
                }
            >
                -
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "REMOVE_ITEM",
                        payload: item.id
                    })
                }
            >
                Remove Item
            </button>
        </div>
    )
}

export default CartItem