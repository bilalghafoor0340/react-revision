import React from 'react'
import { useState } from 'react'

const LoginCard = () => {
    const [isloggedIn, setIsloggeIn] = useState(false)
    // use string value with used state 
    const [message, setMessage] = useState("")


    const handleLogin = () => {
        setIsloggeIn(!isloggedIn)
    }
  return (
    <div>
        <button onClick={handleLogin}>{isloggedIn ? "LogOut" : "Login"}</button>
        <input type="text" placeholder='Enter Your Value' value={message} onChange={(e)=> setMessage(e.target.value)} />
    </div>
  )
}

export default LoginCard