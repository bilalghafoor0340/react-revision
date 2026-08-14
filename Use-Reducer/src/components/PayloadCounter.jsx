import React, { useReducer } from 'react'
const reducer = (state, action) => {
    if(action.type === "increment"){
        return state + 1;
    }
    if(action.type === "ADD_BY_VALUE"){
        return state + action.payload
    }
    if (action.type === "RESET") {
    return 0;
  }
}
const PayloadCounter = () => {
    const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
        <hr /><hr />
        <h2>{count}</h2>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "ADD_BY_VALUE", payload: 5})}>+5</button>
        <button onClick={() => dispatch({type: "ADD_BY_VALUE", payload: 10})}>+10</button>
        <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
    </div>
  )
}

export default PayloadCounter