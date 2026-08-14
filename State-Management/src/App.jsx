
import './App.css'
import Counter from './components/Counter'
import LoginCard from './components/LoginCard'
import PreviousCounter from './components/PreviousCounter'
import ShoppingCard  from './components/ShoppingCard'
import SimpleCounter from './components/SimpleCounter'
import TodoList from './components/TodoList'
import UserProfile from './components/UserProfile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingCard/>
    <TodoList/>
    <UserProfile/>
    <PreviousCounter/>
    <hr />
    <SimpleCounter/>
    <hr />
    
      <Counter/>
    <LoginCard/>
    </>
  )
}

export default App
