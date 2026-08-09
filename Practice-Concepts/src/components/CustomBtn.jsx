import React from 'react'

const CustomBtn = ({text}) => {
    const name = "Bilal Ghafoor"
    const   handleBtn = (e) => {
        // alert("Thanks for {text}")
        console.log(`Hi ${name} you  click  ${text}`);
        ;
        
    }
  return (
    <div>
        <button onClick={handleBtn}>{text}</button>
        {/* <button onClick={handleBtn}>{text}</button> */}
    </div>
  )
}

export default CustomBtn