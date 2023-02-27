import CloudTag from "../../components/CloudTag"

const AboutSection = () => {
  return (
    <section id='aboutSection'>
      <h3><img src='/img/user-icon.svg' alt='User Icon'/>About me</h3>
      <div className='textPart'>
        <p>Hello, my name is <em>Felipe Benini</em> and I am a Full Stack developer with skills in <em>programming languages</em> such as JavaScript, TypeScript, PHP, NodeJS, and <em>frameworks</em> and libraries such as React, jQuery, and Express. My expertise also includes working with <em>databases</em> such as MySQL and MongoDB, in addition to the creation and implementation of RESTful <em>APIs</em> and the integration of applications with external APIs.</p>
        <CloudTag classes="fade"/>
      </div>
    </section>
  )
}

export default AboutSection