import React from 'react'
import HeroSection from './HeroSection'


const Homepage = () => {
  return (
    <div style={{height: '100%'}}>
    <HeroSection/>
    <span id='scroll-down'><p>Scroll Down</p><p id='arrow'>v</p></span>
    </div>
  )
}

export default Homepage