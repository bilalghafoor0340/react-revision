import React from 'react'
import CartItem from './CartItem'

const Cart = ({ items, dispatch }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Shopping Cart
            </h2>

            {items.length > 0 ? (
                <div className="space-y-4">
                    {items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            dispatch={dispatch}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-lg">
                        Your cart is empty 🛒
                    </p>

                    <p className="text-gray-400 text-sm mt-2">
                        Add some shawls to your cart
                    </p>
                </div>
            )}
        </div>
    )
}

export default Cart