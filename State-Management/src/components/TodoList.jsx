import React, { useState } from 'react'

const TodoList = () => {
    const [items, setItems] = useState([
        {id: 1, text: "Learning React"}, 
        {id: 2, text: "Create and App"}, 
        {id: 3, text: "Next tp MOngoDB" }
    ])

    // add new item listin existing array
    const addItem = () => {
        const newItem = {
            id: Date.now(),
            text: "Enter New Item to Array"
        }
        setItems([...items, newItem])
    }

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }
  return (
    <div>
        <hr /><hr />
        <ul>
            {items.map((item) => {
                return <li key={item.id}>{item.text}
                <button onClick={() => removeItem(item.id)}>Delete</button>
                </li>
                
            })}
            
        </ul>
        <button onClick={addItem}>Add New</button>
    </div>
  )
}

export default TodoList