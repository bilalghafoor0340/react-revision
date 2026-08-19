import React from 'react'

const CartSummary = ({ totalItems, totalAmount, dispatch }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
            </h2>

            {/* Total Items */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <p className="text-gray-500">
                    Total Items
                </p>

                <p className="font-semibold text-gray-800">
                    {totalItems}
                </p>
            </div>


            {/* Total Amount */}
            <div className="flex justify-between items-center py-4">
                <p className="text-gray-500">
                    Total Amount
                </p>

                <p className="text-xl font-bold text-gray-900">
                    Rs. {totalAmount.toLocaleString()}
                </p>
            </div>


            {/* Clear Cart */}
            <button
                onClick={() =>
                    dispatch({
                        type: "CLEAR_CART"
                    })
                }
                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition duration-200"
            >
                Clear Cart
            </button>

        </div>
    )
}

export default CartSummary