import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Footer from '../../components/Footer'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import Contact from '../../components/Contact'


const Homepage = () => {
  return (
    <div style={{height: '100%'}}>
    <HeroSection/>
    <span id='scroll-down' className='fade'><p>Scroll Down</p><p id='arrow'>v</p></span>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Homepage