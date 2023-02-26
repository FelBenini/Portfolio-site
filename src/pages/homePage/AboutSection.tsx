import React from 'react'
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const AboutSection = () => {
  return (
    <section id='aboutSection'>
        <h3>About me</h3>
        <div className='textPart'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, minima aliquam numquam expedita provident sapiente incidunt perferendis totam iste, tempora, cupiditate aspernatur obcaecati iure impedit unde beatae voluptas esse ipsam. Molestias, error culpa atque a molestiae veniam odio, reprehenderit eius rerum ex cumque modi sapiente inventore? Nobis delectus reiciendis laudantium!</p>
        <TagCloud
        options={(w: Window & typeof globalThis) => ({
            radius: Math.min(350, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
    >
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
            "Git"
        ]}
    </TagCloud>
        </div>
    </section>
  )
}

export default AboutSection