import React from 'react'

const Alert = ({children, type = "success"}) => {
  return (
    <div style={{
        backgroundColor: type === "success" ? "#10b981" : "#ef4444" ,
        color: "black",
        padding: "16px",
        borderRadius: "9px",
        marginBottom: "15px"
        }}>{children}</div>
  )
}

export default Alert