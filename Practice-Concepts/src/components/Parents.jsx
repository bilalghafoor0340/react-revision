import React from 'react'
import Childs from './Childs'

const Parents = () => {

    const handleSendMsg = (message) => {
        console.log(message);
        
    }
  return (
    <div>
        <Childs onSendMsg= {handleSendMsg}/>
    </div>
  )
}

export default Parents