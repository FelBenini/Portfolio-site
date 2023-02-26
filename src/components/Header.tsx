import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link id='logo' to='/'><img src='/img/logo.webp' alt='logo'/></Link>
        <div>
            <Link to='/about'><h5>About</h5></Link>
            <h5>Contact</h5>
        </div>
    </header>
  )
}

export default Header