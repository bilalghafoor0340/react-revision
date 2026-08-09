// import React from 'react'

// const ProductList = () => {
//   return (
//     <div>
//         <h2>Our Product</h2>
//         <div>
//             <h3>laptop</h3>
//             <p>Price : 2345</p>
//         </div>
//         <div>
//             <h3>Keyboard</h3>
//             <p>Price : 1233</p>
//         </div>
//         <div>
//             <h3>Mouse</h3>
//             <p>Price : 456</p>
//         </div>
//     </div>
//   )
// }

// export default ProductList

// instead of using these method we used list rendering w/c can easy that

import React from 'react'

const ProductList = () => {
    const products = [{
        id: 1,
        name: "Laptop",
        price: 7000
    },
    {
        id: 2,
        name: "Phone",
        price: 6000
    },
    {
        id: 3,
        name: "Tablet",
        price: 5000
    },
    {id: 4, name: "Ipad", price: 1000}
    ]


    const productElements =  products.map((product) => {
        // we can also used filter method in this to filter the price above 5000 
    // const productElements =  products.filter((product) => {return product.price > 5000}).map((product) => {
            return(
                <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
            )
            
        })

  return (
    <div>
        <hr /><hr />
        <h2>Our Products</h2>
        {/* render the products array in jsx */}
        {/* we can also assing this map method to a variable and teh pass throught in jsx */}
        {/* {products.map((product) => {
            return(
                <div>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
            )
            
        })} */}

        {/* render them theses product elemnets in jsx */}
        {productElements}
    </div>
  )
}

export default ProductList