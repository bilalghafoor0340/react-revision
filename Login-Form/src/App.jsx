import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import SignUp from './components/SignUp'

function App() {

// Dashboard or authentication page?
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const [users, setUsers] = useState([]);
  // show signup or login
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <>
    {/* <SignUp users = {users} setUsers= {setUsers}/> */}
     {/* <Login user={user}/>
    <DashBoard/>  */}
    {/* {isLoggedIn ? (
      <DashBoard setIsLoggedIn={setIsLoggedIn}/> 
    ) : 
    (<Login users={users} setIsLoggedIn={setIsLoggedIn}/>)}
     */}
    {/* <Login users={users} setIsLoggedIn={setIsLoggedIn}/> */}
    {isLoggedIn ? (
      <DashBoard setIsLoggedIn={setIsLoggedIn}/>
    ) : showSignUp ? (
      <SignUp users={users} setUsers={setUsers} setShowSignUp= {setShowSignUp}/>
    ) : (
      <Login users={users} setIsLoggedIn={setIsLoggedIn}  setShowSignUp={setShowSignUp}/>
    )}
  </>
  )
}

export default App
