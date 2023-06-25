import { useState } from 'react'
import logo from "../src/assets/logo.png"
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
