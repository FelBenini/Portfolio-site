import React from 'react'

const Contact = () => {
  return (
    <section id='contactSection'>
        <div>
        <span>
            <p><img src='img/email-icon.svg' alt='email icon'/>E-mail:</p>
            <h5>felbenini@gmail.com</h5>
        </span>
        <span>
            <p>Phone:</p>
            <h5>+55 (11) 94005-8451</h5>
        </span>
        <span>
            <p><img src='/img/linkedin-icon.svg' alt='Linkedin icon'/>LinkedIn:</p>
            <h5>Felipe Benini</h5>
        </span>
        </div>
        <img src='/img/email-img.webp' alt='E-mail icon'/>
    </section>
  )
}

export default Contact