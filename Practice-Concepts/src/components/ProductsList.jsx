import React from 'react'
import ProductCard from './ProductCard'

// it is teh parent of productcard

const ProductsList = () => {

    const products = [
        {
            id: 1,
            name: "White Shwl",
            price: "5000",
            avalible: true
        },
         {
            id: 2,
            name: "Black Shwl",
            price: "4000",
            avalible: true
         },
          {
            id: 3,
            name: "UpWhite Shwl",
            price: "4500",
            avalible: false
          }
    ]

  return (
    <div>
       
       { <ProductCard products= {products}/>}
    </div>
  )
}

export default ProductsList