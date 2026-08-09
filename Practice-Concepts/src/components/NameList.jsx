import React from 'react'

const NameList = () => {

    const names = ["Barkat", "Hasnain", "Shabir", "Hashim"]

    const listNames = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

  return (
    <div>
        <hr />
        {listNames}
        {/* {names.map((name) => {
            return(
            <div>
                <h2>{name}</h2>
            </div>)
        })} */}
    </div>
  )
}

export default NameList