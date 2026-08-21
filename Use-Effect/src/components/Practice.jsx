import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [price, setPrice] = useState(0)

    useEffect(()=>{
        setPrice(65000)
        console.log("render component");
        
    }, [])
  return (
    <div>
        <h2>Price: {price}</h2>
    </div>
  )
}

export default Practice