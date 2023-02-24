import React from 'react'
import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  return (
    <section id="heroSection">
    <div id="heroSectionText">
      <h5 className='fade'>Hey there, I am</h5>
      <h1 className='fade'>Felipe Benini</h1>
      <h3 className='fade'>
      <Typewriter
        options={{
          strings: ['a Web Developer', 'a Full Stack Engineer', 'a Web Designer', 'a Full Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 350
        }} />
        </h3>
    </div>
    <img className='fade' src='/img/legoman-portfolio.webp' alt='Lego space astronaut'/>
  </section>
  )
}

export default HeroSection