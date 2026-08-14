import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === "DECREMENT"){
        return state - 1;
    }
    if(action.type === "RESET"){
        return 0;
    }
    return state

}

const SimpleCounter = () => {
    const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
        <hr /><hr />
        <h2>{count}</h2>
        <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default SimpleCounter