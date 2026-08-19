import React from 'react'

const CartItem = ({ item, dispatch }) => {
    return (
        <div className="border border-gray-200 rounded-xl p-4">

            {/* Product Info */}
            <div className="mb-4">
                <h3 className="font-semibold text-gray-800">
                    {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                    Rs. {item.price.toLocaleString()}
                </p>
            </div>


            {/* Quantity + Remove */}
            <div className="flex items-center justify-between gap-3">

                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                    <button
                        onClick={() =>
                            dispatch({
                                type: "DECREASE_ITEM",
                                payload: item.id
                            })
                        }
                        className="w-9 h-9 flex items-center justify-center text-lg font-bold text-gray-700 hover:bg-gray-100 transition"
                    >
                        −
                    </button>

                    <span className="w-10 text-center font-semibold text-gray-800">
                        {item.quantity}
                    </span>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "INCREASE_ITEM",
                                payload: item.id
                            })
                        }
                        className="w-9 h-9 flex items-center justify-center text-lg font-bold text-gray-700 hover:bg-gray-100 transition"
                    >
                        +
                    </button>

                </div>


                {/* Remove Button */}
                <button
                    onClick={() =>
                        dispatch({
                            type: "REMOVE_ITEM",
                            payload: item.id
                        })
                    }
                    className="text-sm font-medium text-red-500 hover:text-red-700 transition"
                >
                    Remove
                </button>

            </div>

        </div>
    )
}

export default CartItem