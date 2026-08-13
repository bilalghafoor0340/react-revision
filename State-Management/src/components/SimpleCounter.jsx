import React, { useState } from 'react'

const SimpleCounter = () => {
    
    const [count, setCount] = useState(0)
     console.log("Render phase: component render with conut:", count);
    // const handleClick= () => {
    //     console.log("Before set count the value of count is ", count);
        
    //     setCount(count + 1)
    //      console.log("Still in triger phase, After setCount , count is ", count);
    // }
    const handleClick = () => {
        setCount(count + 1)
        console.log("After count setcount(count + 1) is ", count);
        
        setCount(count + 5)
        console.log("After count setcount(count + 5) is ", count);
        setCount(count + 10)
        console.log("After count setcount(count + 10 ) is ", count);
    }

  return (
    <div>
        <h2>Simple count</h2>
        <h3>Count:{count}</h3>
        <button onClick={handleClick}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decreament</button>
    </div>
  )
}

export default SimpleCounter