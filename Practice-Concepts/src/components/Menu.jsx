import React from 'react'
import MenuItems from './MenuItems'

const Menu = () => {
    const handleOrder = (itemName, ItemPrice) => {
        alert(`You ordered ${itemName} for ${ItemPrice}`)
    }
  return (
    <div>
        <MenuItems name= "Pizza" price= {10} onOrder={handleOrder}/>
        <MenuItems name= "Burger" price= {8} onOrder={handleOrder}/>
        <MenuItems name= "Pepsi" price= {5} onOrder={handleOrder}/>
    </div>
  )
}

export default Menu