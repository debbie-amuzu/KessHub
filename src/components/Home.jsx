import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Cars from './Cars'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About />
      <Services />
      <Cars />
      <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home