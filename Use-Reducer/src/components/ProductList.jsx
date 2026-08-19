import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, dispatch }) => {
    return (
        <div>
            <h2>Shawl Categories</h2>

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                />
            ))}
        </div>
    )
}

export default ProductList