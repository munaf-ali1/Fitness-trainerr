import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Exercises from './components/Exercises.jsx'
import BMI from './components/BMI.jsx'


import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {
  

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar />
      <Home />
      <About />
      <BMI />
      
      <Exercises />
      
      
      
     
      
      <Contact />
      <Footer />
    </div>
  
  )
}

export default App
