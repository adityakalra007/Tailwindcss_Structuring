import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import './App.css'
import { Features } from './components/Features'
import { Hero } from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Navbar */}
     <Navbar></Navbar>

     {/* Hero */} 
     <Hero></Hero>

     {/* Features */}
     <Features></Features>
    

    </>
  )
}

export default App
