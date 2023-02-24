import React from 'react'
import Typewriter from 'typewriter-effect'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

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
                <span className='fade'>
                    <Tooltip title="GitHub">
                        <IconButton color='secondary'>
                            <img src='/img/github-icon.svg' alt='github profile' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn" style={{marginLeft: '10px'}}>
                        <IconButton color='secondary'>
                            <img src='/img/linkedin-icon.svg' alt='linkedin profile' />
                        </IconButton>
                    </Tooltip>
                </span>
            </div>
            <img id='header-img' className='fade' src='/img/legoman-portfolio.webp' alt='Lego space astronaut' />
        </section>
    )
}

export default HeroSection