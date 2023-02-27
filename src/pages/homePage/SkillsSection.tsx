import React from 'react'

const SkillsSection = () => {
  return (
    <section id='skillsSection'>
        <h3>My Skills</h3>
        <div id='skills-wrapper'>
          <p>
          I have a strong problem-solving ability and teamwork skills. Additionally, I am passionate about learning and coding, and I always strive to stay up-to-date with the latest trends and technologies in the market. My goal is to grow professionally by developing efficient and innovative solutions that can improve people's lives. I am looking for the right opportunity to demonstrate my skills and achieve my objectives.
          </p>
            <div>
                <h5><img src='/img/rocket.svg' alt='Rocket icon'/>Front-end</h5>
                <p><img src='/img/html-icon.svg' alt='HTML 5 Icon'/>HTML 5</p>
                <p><img src='/img/css-icon.svg' alt='CSS 3 Icon'/>CSS 3</p>
                <p><img src='/img/sass-icon.svg' alt='SASS Icon'/>SASS</p>
                <p><img src='/img/react-icon.svg' alt='React Icon'/>React</p>
                <p><img src='/img/jquery-icon.svg' alt='jQuery Icon'/>jQuery</p>
                <p><img src='/img/javascript-icon.svg' alt='JavaScript Icon'/>JavaScript</p>
                <p><img src='/img/typescript-icon.svg' alt='TypeScript Icon'/>TypeScript</p>
            </div>
            <div>
                <h5><img src='/img/backend-icon.svg' alt='Database icon'/>Back-end</h5>
                <p><img src='/img/php-icon.svg' alt='PHP icon'/>PHP</p>
                <p>MySQL</p>
                <p><img src='/img/nodejs-icon.svg' alt='NodeJS icon'/>NodeJS</p>
                <p>Express</p>
                <p><img src='/img/mongodb-icon.svg' alt='MongoDB icon'/>MongoDB</p>
            </div>
        </div>
    </section>
  )
}

export default SkillsSection