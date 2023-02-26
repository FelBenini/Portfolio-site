import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Footer from '../../components/Footer'


const Homepage = () => {
  return (
    <div style={{height: '100%'}}>
    <HeroSection/>
    <span id='scroll-down' className='fade'><p>Scroll Down</p><p id='arrow'>v</p></span>
    <AboutSection/>
    <Footer/>
    </div>
  )
}

export default Homepage