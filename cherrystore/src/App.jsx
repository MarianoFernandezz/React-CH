import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Greeting from './components/Greeting/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Greeting
        nombre="Mariano"
      />
    </>
  )
}

export default App
