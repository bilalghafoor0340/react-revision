import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import DashBoard from './components/DashBoard'

function App() {

  const user = {
    email: "admin@gmail.com",
    password: "12345"
  }

  const [isLoggedIn , setIsLoggedIn] = useState(false)

  return (
    <>
    {/* <Login user={user}/>
    <DashBoard/> */}
    {isLoggedIn ? (
      <DashBoard setIsLoggedIn={setIsLoggedIn}/> 
    ) : 
    (<Login user={user} setIsLoggedIn={setIsLoggedIn}/>)}
  </>
  )
}

export default App
