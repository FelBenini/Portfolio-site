import React from 'react'
import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  return (
    <section id="heroSection">
    <div id="heroSectionText">
      <h5>Hey there, I am</h5>
      <h1>Felipe Benini</h1>
      <h3>
      <Typewriter
        options={{
          strings: ['a Web Developer', 'a Full Stack Engineer', 'a Web Designer', 'a Full Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 350
        }} />
        </h3>
    </div>
    <img src='/img/legoman-portfolio.png' alt='Lego space astronaut'/>
  </section>
  )
}

export default HeroSection