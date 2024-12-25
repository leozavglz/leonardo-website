import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Carrusel from './Carrusel'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Card/>
    </div>
  )
}

export default App
