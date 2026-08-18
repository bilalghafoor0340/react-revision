import React from 'react'
import { useReducer } from 'react'

const initialState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
}

const reducer = (state, action) => {
    // return new state 
    switch (action.type){

        case "ADD_ITEM": {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            )
             // Product is NOT already in cart
            if(!existingItem){
                const newItem = {
                    ...action.payload,
                    quantity: 1
                }
                return {
                    ...state,
                    items: [...state.items, newItem]
                }
            }
            // Product already exists
            const updatedItems = state.items.map(
                item => item.id === action.payload.id
                ? {...item, quantity: item.quantity + 1} : item
            )
            return {
                ...state, 
                items: updatedItems
            }
        }
        // CASE FOR INCREMENT
        case "INCREASE_ITEM": {
            const updatedItems = state.items.map((item) =>
            item.id === action.payload
            ?
            {...item, quantity: item.quantity + 1}
            : item
        )
        return {
            ...state, 
            items: updatedItems
        }
        }
        // CASE FOR DECREMENT
        case "DECREASE_ITEM": {
            const updatedItems = state.items.map((item) =>
            item.id === action.payload
            ? 
            {...item, quantity: item.quantity - 1}
            : item )
            .filter((item) => item.quantity > 0)
            return {
                ...state, 
                items: updatedItems
            }
        }
        // REMOVE CASE
        case "REMOVE_ITEM": {
            const updatedItems = state.items.filter((item) => 
            item.id !== action.payload)
            return {
                ...state, 
                items: updatedItems
            }
        }

        default:
            return state;
    }
}

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const products = [
        {id: 1, name: "72 pure woolen shwl", price: 12000},
        {id: 2, name: "64 pure woolen shwl", price: 8000},
        {id: 3, name: "52 pure woolen shwl", price: 5000}
    ]
  return (
    <div>
        <hr /><hr />
        <h2>Shawl Categories</h2>
        {products.map((product) => (
            <div key={product.id}>
                <h3>
                    {product.name} - {product.price}
                </h3>
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>Add To Cart</button>
            </div>
        ))}

        {/* Cart display */}
        <div>
            <h2>Shopping Cart</h2>
            {state.items.map((item) => (
            <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>

                <button onClick={() => dispatch({type: "INCREASE_ITEM", payload: item.id})}>+</button>
                <button onClick={() => dispatch({type: "DECREASE_ITEM", payload: item.id})}>-</button>
                <button onClick={() => dispatch({type: "REMOVE_ITEM", payload:item.id})}>Remove Item</button>
            </div>
            )
            )}
        </div>
    </div>
  )
}

export default ShoppingCart