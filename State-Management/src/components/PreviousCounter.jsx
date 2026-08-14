import React, { useState } from 'react'

const PreviousCounter = () => {
    const [count, setCount] = useState(0)
    console.log("Render phase: component render with conut:", count);

    const handleClick = (prev) => {
        setCount((prev) => prev + 1)
      
        
        
        setCount((prev) => prev + 5)
        console.log("After count setcount(prev + 5) is ", count);
        //  return prev + 5

        setCount((prev) => prev + 10)
        console.log("After count setcountprev + 10 ) is ", count);
        //  return prev + 10
    }
  return (
    <div>
      <hr /><hr />
        <h3>Count:{count}</h3>
        <button onClick={handleClick}>Increament</button>
        {/* <button onClick={() => setCount(count - 1)}>Decreament</button> */}
    </div>
  )
}

export default PreviousCounter