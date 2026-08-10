import React from 'react'
// props come from parent (Productslist)

const ProductCard = ({products}) => {
  const onBtnClick = (product) => {
   alert(`The product ${product.name} was clicked & the price is ${product.price}`);
  }
  return (
    <div >
        {products.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>Price:{product.price}</h3>
                <p>{product.avalible ? (
                  <button onClick={() => onBtnClick(product)}>Add to Card</button>
                )  : "Out of Stock"}</p>
            </div>
        ))}
    </div>
  )
}

// Why not this?
// onClick={onBtnClick(product)}

// Because that would call the function immediately while React is rendering, rather than waiting for the click.

export default ProductCard