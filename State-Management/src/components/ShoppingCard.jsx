import React, { useState } from 'react'

const ShoppingCard = () => {
    const [cardItems, setCardItems] = useState({
        reactCourse: 0,
        vueCourse: 0
    })

    const prices = {
        reactCourse : 49.99,
        vueCourse: 99.99
    }

    const handleAddReactCourse = () => {
        setCardItems({...cardItems, 
            reactCourse: cardItems.reactCourse + 1
        })
    }

    const handleAddVueCourse = () => {
        setCardItems({...cardItems, 
            vueCourse: cardItems.vueCourse + 1
        })
    }

    const clearCard = () => {
        setCardItems({
            reactCourse: 0,
            vueCourse: 0
        })
    }

  return (
    <div>
        <hr /><hr />
        <h1>Handle Shopping Card through lifting</h1>
        <ProductCard name= "React Course" price={prices.reactCourse} quantity={cardItems.reactCourse} onAddToCard = {handleAddReactCourse}/>
        <ProductCard name= "Vue Course" price={prices.vueCourse} quantity={cardItems.vueCourse} onAddToCard = {handleAddVueCourse}/>
        <CardSummary cardItems={cardItems} prices={prices}/>
        <button onClick={clearCard}>Clear Card</button>
    </div>
  )
}

export default ShoppingCard

export const ProductCard = ({name, price, quantity, onAddToCard}) => {

    // const [quantity, setQuantity] = useState();
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={onAddToCard}>Add To Card</button>
            
        </div>
    )
}

export const CardSummary = ({cardItems, prices}) => {
    const totalItems = cardItems.reactCourse + cardItems.vueCourse

    const totalPrice = 
    cardItems.reactCourse * prices.reactCourse + 
    cardItems.vueCourse * prices.vueCourse
    
    return (
        <div>
            <h3>Card Summary</h3>
            <p>Total items: {totalItems}</p>
            <p>Total Price : ${totalPrice.toFixed(2)}</p>
        </div>
    )
}