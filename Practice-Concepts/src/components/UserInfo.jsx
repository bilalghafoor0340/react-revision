import React from 'react'

const UserInfo = ({name, isOnline, isOffline}) => {
  if(isOffline && !isOnline){
    return null
  }
  return (
    <div>
      <hr />
        <h2>{name}</h2>
        <span>{isOnline ? "is Online" : "is offline"}</span>
        <p>{isOnline ? "Avalible for Chatting" : "Not Avalible for chatting"}</p>
        {isOnline ? (
          <button>Send</button>
        ) : (
          <small>Try a later</small>
        )}

    </div>
  )
}

export default UserInfo