import React from 'react'
import ActionBtn from './ActionBtn'

const Contact = () => {

    const handSendMsg = () => {
        alert("Sending Your Message")
    }

  return (
    <div>
        <h2>Contact Us</h2>
        {/* pass action button as a chhild */}
        <ActionBtn text="Send Message" onClick={handSendMsg}/>
    </div>
  )
}

export default Contact