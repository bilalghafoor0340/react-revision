import React from 'react'

const ProductCard = ({products}) => {
  return (
    <div >
        {products.map((product) => (
            <div style={{display: 'flex', gap: 10, alignItems:'center',}} key={product.id}>
                <h2>{product.name}</h2>
                <h3>Price:{product.price}</h3>
                <h4>{product.avalible}</h4>
            </div>
        ))}
    </div>
  )
}

export default ProductCard