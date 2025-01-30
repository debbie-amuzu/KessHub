import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Services from './Services'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Home