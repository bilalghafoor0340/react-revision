// import React from 'react'
// import { useReducer } from 'react'

// const initialState = {
//     items: [],
//     totalAmount: 0,
//     totalItems: 0
// }

// const reducer = (state, action) => {
//     // return new state 
//     switch (action.type){
//     // ADD NEW ITEMS 
//         case "ADD_ITEM": {
//             const existingItem = state.items.find(
//                 item => item.id === action.payload.id
//             )
//              // Product is NOT already in cart
//             if(!existingItem){
//                 const newItem = {
//                     ...action.payload,
//                     quantity: 1
//                 }

//                 const updatedItems = [...state.items, newItem]
//                 const totalItems = updatedItems.reduce(
//                     (total, item) => total + item.quantity , 0
//                 )

//                 // ADD TOTAL AMOUNT
//                 const totalAmount = updatedItems.reduce(
//                     (total, item) => total + item.price * item.quantity, 0
//                 )
//                 return {
//                     ...state,
//                     // items: [...state.items, newItem],
//                     items: updatedItems,
//                     totalItems: totalItems,
//                     totalAmount: totalAmount
//                 }
//             }
//             // Product already exists
//             const updatedItems = state.items.map(
//                 item => item.id === action.payload.id
//                 ? {...item, quantity: item.quantity + 1} : item
//             )
//             // calculate total items
//             const totalItems = updatedItems.reduce(
//                 (total, item) => total + item.quantity, 0
//             )
//             const totalAmount = updatedItems.reduce(
//             (total, item) => total + item.price * item.quantity,
//             0
//             )

//             return {
//                 ...state, 
//                 items: updatedItems,
//                 totalItems : totalItems,
//                 totalAmount: totalAmount
//             }
//         }
//         // CASE FOR INCREMENT
//         case "INCREASE_ITEM": {
//             const updatedItems = state.items.map((item) =>
//             item.id === action.payload
//             ?
//             {...item, quantity: item.quantity + 1}
//             : item
//         )
//         const totalItems = updatedItems.reduce(
//         (total, item) => total + item.quantity,
//         0
//         )
//         // ADD AMONUT
//         const totalAmount = updatedItems.reduce(
//             (total, item) => total + item.price * item.quantity, 0
//         )
//         return {
//             ...state, 
//             items: updatedItems,
//             totalItems: totalItems,
//             totalAmount: totalAmount
//         }
//         }
//         // CASE FOR DECREMENT
//         case "DECREASE_ITEM": {
//             const updatedItems = state.items.map((item) =>
//             item.id === action.payload
//             ? 
//             {...item, quantity: item.quantity - 1}
//             : item )
//             .filter((item) => item.quantity > 0)
//             // add items
//             const totalItems = updatedItems.reduce(
//                 (total, item) => total + item.quantity, 0
//             )

//             // add total amount
//             const totalAmount = updatedItems.reduce(
//                 (total, item) => total + item.price * item.quantity, 0
//             )
//             return {
//                 ...state, 
//                 items: updatedItems,
//                 totalItems: totalItems,
//                 totalAmount: totalAmount
//             }
//         }
//         // REMOVE CASE
//         case "REMOVE_ITEM": {
//             const updatedItems = state.items.filter((item) => 
//             item.id !== action.payload)

//             const totalItems = updatedItems.reduce(
//                 (total , item) => total + item.quantity, 0
//             )
//             // add amount
//             const totalAmount = updatedItems.reduce(
//             (total, item) => total + item.price * item.quantity,
//                 0
//             )
//             return {
//                 ...state, 
//                 items: updatedItems, 
//                 totalItems: totalItems,
//                 totalAmount: totalAmount
//             }
//         }

//         // CLEAR 
//         case "CLEAR_CART": {
//         return initialState
//         }
        
        

//         default:
//             return state;
//     }
// }

// const ShoppingCart = () => {

//     const [state, dispatch] = useReducer(reducer, initialState)

//     const products = [
//         {id: 1, name: "72 pure woolen shwl", price: 12000},
//         {id: 2, name: "64 pure woolen shwl", price: 8000},
//         {id: 3, name: "52 pure woolen shwl", price: 5000}
//     ]
//   return (
//     <div>
//         <hr /><hr />
//         <h2>Shawl Categories</h2>
//         {products.map((product) => (
//             <div key={product.id}>
//                 <h3>
//                     {product.name} - {product.price}
//                 </h3>
//                 <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>Add To Cart</button>
//             </div>
//         ))}
//         <button
//     onClick={() => dispatch({ type: "CLEAR_CART" })}
// >
//     Clear Cart
// </button>

//         {/* Cart display */}
//        {/* Cart display */}
// <div>
//     <h2>Shopping Cart</h2>

//     {state.items.length > 0 ? (
//         state.items.map((item) => (
//             <div key={item.id}>
//                 <p>{item.name}</p>
//                 <p>Price: {item.price}</p>
//                 <p>Quantity: {item.quantity}</p>

//                 <button
//                     onClick={() =>
//                         dispatch({
//                             type: "INCREASE_ITEM",
//                             payload: item.id
//                         })
//                     }
//                 >
//                     +
//                 </button>

//                 <button
//                     onClick={() =>
//                         dispatch({
//                             type: "DECREASE_ITEM",
//                             payload: item.id
//                         })
//                     }
//                 >
//                     -
//                 </button>

//                 <button
//                     onClick={() =>
//                         dispatch({
//                             type: "REMOVE_ITEM",
//                             payload: item.id
//                         })
//                     }
//                 >
//                     Remove Item
//                 </button>
//             </div>
//         ))
//     ) : (
//         <p>Your cart is empty 🛒</p>
//     )}
// </div>
//         <p>Total Items: {state.totalItems}</p>
//         <p>Total Amount: {state.totalAmount}</p>
//     </div>
//   )
// }

// export default ShoppingCart

import React, { useReducer } from 'react'

import ProductList from './ProductList'
import Cart from './Cart'
import CartSummary from './CartSummary'


const initialState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
}


const reducer = (state, action) => {

    switch (action.type) {

        // ADD ITEM
        case "ADD_ITEM": {

            const existingItem = state.items.find(
                item => item.id === action.payload.id
            )

            // Product is NOT already in cart
            if (!existingItem) {

                const newItem = {
                    ...action.payload,
                    quantity: 1
                }

                const updatedItems = [
                    ...state.items,
                    newItem
                ]

                const totalItems = updatedItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                )

                const totalAmount = updatedItems.reduce(
                    (total, item) =>
                        total + item.price * item.quantity,
                    0
                )

                return {
                    ...state,
                    items: updatedItems,
                    totalItems: totalItems,
                    totalAmount: totalAmount
                }
            }

            // Product already exists
            const updatedItems = state.items.map(
                item =>
                    item.id === action.payload.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
            )

            const totalItems = updatedItems.reduce(
                (total, item) => total + item.quantity,
                0
            )

            const totalAmount = updatedItems.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            )

            return {
                ...state,
                items: updatedItems,
                totalItems: totalItems,
                totalAmount: totalAmount
            }
        }


        // INCREASE
        case "INCREASE_ITEM": {

            const updatedItems = state.items.map(
                item =>
                    item.id === action.payload
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
            )

            const totalItems = updatedItems.reduce(
                (total, item) => total + item.quantity,
                0
            )

            const totalAmount = updatedItems.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            )

            return {
                ...state,
                items: updatedItems,
                totalItems: totalItems,
                totalAmount: totalAmount
            }
        }


        // DECREASE
        case "DECREASE_ITEM": {

            const updatedItems = state.items
                .map(
                    item =>
                        item.id === action.payload
                            ? {
                                ...item,
                                quantity: item.quantity - 1
                            }
                            : item
                )
                .filter(item => item.quantity > 0)

            const totalItems = updatedItems.reduce(
                (total, item) => total + item.quantity,
                0
            )

            const totalAmount = updatedItems.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            )

            return {
                ...state,
                items: updatedItems,
                totalItems: totalItems,
                totalAmount: totalAmount
            }
        }


        // REMOVE
        case "REMOVE_ITEM": {

            const updatedItems = state.items.filter(
                item => item.id !== action.payload
            )

            const totalItems = updatedItems.reduce(
                (total, item) => total + item.quantity,
                0
            )

            const totalAmount = updatedItems.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            )

            return {
                ...state,
                items: updatedItems,
                totalItems: totalItems,
                totalAmount: totalAmount
            }
        }


        // CLEAR
        case "CLEAR_CART":
            return initialState


        default:
            return state
    }
}


const ShoppingCart = () => {

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )


    const products = [
        {
            id: 1,
            name: "72 pure woolen shwl",
            price: 12000
        },
        {
            id: 2,
            name: "64 pure woolen shwl",
            price: 8000
        },
        {
            id: 3,
            name: "52 pure woolen shwl",
            price: 5000
        }
    ]


    return (
        <div>

            <hr />
            <hr />

            {/* Products */}
            <ProductList
                products={products}
                dispatch={dispatch}
            />


            {/* Cart */}
            <Cart
                items={state.items}
                dispatch={dispatch}
            />


            {/* Summary */}
            <CartSummary
                totalItems={state.totalItems}
                totalAmount={state.totalAmount}
                dispatch={dispatch}
            />

        </div>
    )
}

export default ShoppingCart