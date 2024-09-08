import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
    <Footer/>
    <Outlet></Outlet>
    
    
    </>
  )
}

export default App