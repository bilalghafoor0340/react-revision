import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Component rendered");
    }, [])
    const handleIncrease = () => {
        setCount(count + 1);
    }
  return (

    <div>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrease}>Button</button>
     </div>
    
  )
}

export default Count