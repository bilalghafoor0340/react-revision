import React, { useState } from 'react'

const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Bilal Ghafoor",
        age: 23,
        email: "bilalghafoor1020@gmail.com"
    })

    const handleBtn = () => {
        setUser({
            ...user,
            name: "Abbas Ghafoor"
        })
    }
    const updateAge = () => {
        setUser({
            ...user,
            age: 24
        })
    }
  return (
    <div>
        <hr /><hr />
       <h2>{user.name}</h2>
       <h4>{user.age}</h4>
       <p>{user.email}</p>
       <button onClick={handleBtn}>Click </button>
       <button onClick={updateAge}>Update Age By 1 </button>
    </div>
  )
}

export default UserProfile