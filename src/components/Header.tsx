import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link id='logo' to='/'><img src='/img/logo.webp' alt='logo'/></Link>
        <div>
            <Link to='/projects'><h5>Projects</h5></Link>
            <Link to='/about'><h5>About</h5></Link>
            <Link to='/contact'><h5>Contact</h5></Link>
        </div>
    </header>
  )
}

export default Header