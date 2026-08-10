import React from 'react'

const Childs = ({onSendMsg}) => {
  return (
    <div>
        <button onClick={() => onSendMsg("Hello Parent")}>Order Sir</button>
    </div>
  )
}

export default Childs