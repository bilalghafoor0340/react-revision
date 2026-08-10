import React from 'react'
import { useState } from 'react';

const Counter = () => {
    // let count = 0
    console.log("component rerender");

    const [count, setCount] = useState(0)
    console.log(`The counter vaue render with ${count }`);
    
    
    const handleCount = () => {
        // count = count + 1;
        // console.log(count)
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={handleCount}>Count:{count}</button>
    </div>
  )
}

export default Counter