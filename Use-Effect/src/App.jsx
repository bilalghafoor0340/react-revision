import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Count from './components/Count'
import Practice from './components/Practice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Practice/>
      <Count/>
    </>
  )
}

export default App
