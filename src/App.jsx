import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import './App.css'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
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
    
    {/* Call To Action */}
    <CTA></CTA>

    {/* Footer */}
    <Footer></Footer>
    </>
  )
}

export default App
