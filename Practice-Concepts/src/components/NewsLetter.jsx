import React from 'react'
import ActionBtn from './ActionBtn'

const NewsLetter = () => {
    const handleSubscribe = () => {
        alert("Thank you for subscribing")
    }
  return (
    <div>
        <h2>Suscribe to NewsLetter</h2>
        <ActionBtn text="subcribe" onClick={handleSubscribe}/>
    </div>
  )
}

export default NewsLetter