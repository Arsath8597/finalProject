import React from 'react'
import Navbar from '../pages/Navbar'
import Home from '../pages/Home'
import Meeting from '../pages/Meeting'
import Contact from '../pages/Contact'
import Footer from '../pages/Footer'
import About from '../pages/About'

export const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Home />
        <About/>
        <Meeting/>
       <Contact/>
       <Footer/>
        
    </div>
  )
}
export default Landing