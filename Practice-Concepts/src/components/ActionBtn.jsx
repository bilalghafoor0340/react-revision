import React from 'react'

// props can comes from newsletre and contact form
const ActionBtn = ({text, onClick}) => {
  return (
    <div><button onClick={onClick}>{text}</button></div>
  )
}

export default ActionBtn