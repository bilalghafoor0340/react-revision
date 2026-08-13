
import './App.css'
import Counter from './components/Counter'
import LoginCard from './components/LoginCard'
import PreviousCounter from './components/PreviousCounter'
import SimpleCounter from './components/SimpleCounter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
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
