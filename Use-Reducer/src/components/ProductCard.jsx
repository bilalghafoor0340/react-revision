import React from 'react'

const ProductCard = ({ product, dispatch }) => {
    return (
        <div>
            <h3>
                {product.name} - {product.price}
            </h3>

            <button
                onClick={() =>
                    dispatch({
                        type: "ADD_ITEM",
                        payload: product
                    })
                }
            >
                Add To Cart
            </button>
        </div>
    )
}

export default ProductCard