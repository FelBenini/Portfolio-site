import { TagCloud } from "@frank-mayer/react-tag-cloud";

const AboutSection = () => {
  return (
    <section id='aboutSection'>
      <h3><img src='/img/user-icon.svg' alt='User Icon'/>About me</h3>
      <div className='textPart'>
        <p>Hello, my name is <em>Felipe Benini</em> and I am a <em>Full Stack developer</em> with skills in programming languages such as JavaScript, TypeScript, PHP, NodeJS, and frameworks such as React, jQuery, and Express. My expertise also includes working with databases such as MySQL and MongoDB, in addition to the creation and implementation of RESTful APIs and the integration of applications with external APIs.</p>
        <TagCloud
          options={(w: Window & typeof globalThis) => ({
            radius: Math.min(350, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "slow",
          })}
          onClick={(tag: string, ev: MouseEvent) => alert(tag)}
          onClickOptions={{ passive: true }}>
          {[
            "VSCode",
            "TypeScript",
            "React",
            "JavaScript",
            "PHP",
            "MySQL",
            "NodeJS",
            "MongoDB",
            "jQuery",
            "JSON",
            "Express",
            "Git",
            "SASS",
            "HTML5",
            "CSS3"
          ]}
        </TagCloud>
      </div>
    </section>
  )
}

export default AboutSection