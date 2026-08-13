import React from 'react'
import { useState } from 'react'

const LoginCard = () => {
    const [isloggedIn, setIsloggeIn] = useState(false)
    // use string value with used state 
    const [message, setMessage] = useState("")


    const handleLogin = () => {
        setIsloggeIn(!isloggedIn)
    }

    const handleValueChange = (event) => {
      setMessage(event.target.value)
    }

  return (
    <div>
        <button onClick={handleLogin}>{isloggedIn ? "LogOut" : "Login"}</button>
        {/* <input type="text" value={message} onChange={(e) => setMessage(e.target.value) } placeholder='Type your message'/> */}
        {/* also we write it */}
        <input type="text" value={message} onChange={handleValueChange}  />
        <p>{message}</p>
    </div>
  )
}

export default LoginCard