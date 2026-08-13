import React from 'react'
import UserCard from './UserCard'

const UserList = () => {
    const users = [
        {
            name: "Bilal Ghafoor",
            role: "Developer",
            available: "online"
        },{
            name: "Ali Khan",
            role: "Designer",
            available: "offline"
        },{
            name: "Ahmed",
            role: "Project Maneger",
            available: "online"
        },
        {
            name: "Barkat Ali",
            role: "BlockChain developer",
            available: "offline"
        }
    ]
  return (
    <div>
        <UserCard users = {users}/>
    </div>
  )
}

export default UserList