import HeroSection from './HeroSection'
import AboutSection from './AboutSection'


const Homepage = () => {
  return (
    <div style={{height: '100%'}}>
    <HeroSection/>
    <span id='scroll-down' className='fade'><p>Scroll Down</p><p id='arrow'>v</p></span>
    <AboutSection/>
    </div>
  )
}

export default Homepage