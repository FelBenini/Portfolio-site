import React from 'react'
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const CloudTag = (props: {classes: string}) => {
  return (
    <div className={props.classes}>
        <TagCloud
          options={(w: Window & typeof globalThis) => ({
            radius: Math.min(350, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
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
            "Express",
            "Git",
            "SASS",
            "HTML5",
            "CSS3"
          ]}
        </TagCloud>
    </div>
  )
}

export default CloudTag