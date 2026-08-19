import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, dispatch }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Shawl Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        dispatch={dispatch}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList