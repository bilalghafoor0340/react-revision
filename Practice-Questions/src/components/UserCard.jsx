import React from 'react'
// pass as a child in userlist
const UserCard = ({users}) => {
    const handleFollow = (name) => {
    console.log(`You followed ${name}`)
    alert(`You followed ${name}`)
}
    
  return (
    <div>
        {users.map((user) => (
            <div key={user.name}>
                <h2>Name: {user.name} {user.available === "online" ? (
                    <span>🟢 Online</span>
                ): (
                     <span>🔴 Offline</span>
                )} </h2>
                <h3>Role in Company: {user.role}</h3>
                <button onClick={() => handleFollow(user.name)}>Follow</button>
            </div>
        ))}
    </div>
  )
}

export default UserCard