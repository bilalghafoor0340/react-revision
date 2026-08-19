import React from 'react'

const ProductCard = ({ product, dispatch }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">

            {/* Product Information */}
            <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-800 capitalize">
                    {product.name}
                </h3>

                <p className="text-xl font-bold text-gray-900 mt-2">
                    Rs. {product.price.toLocaleString()}
                </p>
            </div>


            {/* Add To Cart Button */}
            <button
                onClick={() =>
                    dispatch({
                        type: "ADD_ITEM",
                        payload: product
                    })
                }
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200"
            >
                Add To Cart
            </button>

        </div>
    )
}

export default ProductCard