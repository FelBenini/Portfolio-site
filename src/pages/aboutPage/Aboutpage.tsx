import React from 'react'
import CloudTag from '../../components/CloudTag'
import Footer from '../../components/Footer'

const Aboutpage = () => {
  return (
    <section id='aboutPage'>
      <h2 className='fade'>About me</h2>
      <div>
        <p className='fade'>My name is Felipe Benini and I am a Full Stack Developer located in São Paulo, Brazil. I am always looking for new challenges and opportunities to learn and grow as a developer. I am confident that my skills and experience will be an asset to any project or team, and I look forward to get my first opportunity in the tech industry. <br/><br/>
        <p className='fade'>
        When I am not coding, I enjoy exploring other hobbies such as watching movies, reading, painting, and playing some games. These activities not only help me relax and unwind, but they also help me tap into my creativity and approach problem-solving from a different perspective. I find that these hobbies complement my work as a developer, allowing me to bring fresh ideas and a unique perspective to my coding projects.
        </p></p>
        <CloudTag classes='fade'/>
      </div>
      <Footer/>
    </section>
  )
}

export default Aboutpage