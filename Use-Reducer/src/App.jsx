
import { useReducer } from 'react'
import './App.css'
import SimpleCounter from './components/SimpleCounter'
import PayloadCounter from './components/PayloadCounter'
import TodoList from './components/TodoList'

function App() {

 
  return (
    <>
      <TodoList/>
      <PayloadCounter/>
      <SimpleCounter/>
    </>
  )
}

export default App
