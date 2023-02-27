import React from 'react'
import Card from '../../components/Card'

const ProjectsSection = () => {
    function cardAnimation(e: React.MouseEvent) {
        for(const card of document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;
        
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          };
    }
  return (
    <section id='projectSection'>
        <h3>My Projects</h3>
    <div id='cards' onMouseMove={cardAnimation}>
        <Card name='CryptoTracker' img='/img/cryptotracker-img.webp' description="A crypto tracker web app made with React, CoinGecko's API and other libraries."/>
        <Card name='Todo App' img='/img/todo-app-img.webp' description='A task manager made with React, TypeScript, cookies and other libraries.'/>
    </div>
    </section>
  )
}

export default ProjectsSection