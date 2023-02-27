import React from 'react'

const Contact = () => {
  return (
    <section id='contactSection'>
        <h3>Contact Info</h3>
        <div>
        <span>
            <p><img src='img/email-icon.svg' alt='email icon'/>E-mail:</p>
            <a href='mailto:felbenini@gmail.com'><h5>felbenini@gmail.com</h5></a>
        </span>
        <span>
            <p>Phone:</p>
            <h5>+55 (11) 94005-8451</h5>
        </span>
        <span>
            <p><img src='/img/linkedin-icon.svg' alt='Linkedin icon'/>LinkedIn:</p>
            <a href='https://www.linkedin.com/in/felipe-benini-88a23b24a/' target='blank'><h5>Felipe Benini</h5></a>
        </span>
        </div>
        <img src='/img/email-img.webp' alt='E-mail icon'/>
    </section>
  )
}

export default Contact