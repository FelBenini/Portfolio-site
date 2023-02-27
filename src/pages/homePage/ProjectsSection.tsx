import React from 'react'
import Card from '../../components/Card'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ProjectsSection = () => {
    function cardAnimation(e: React.MouseEvent) {
        for (const card of document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>) {
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
                <Card name='CryptoTracker' img='/img/cryptotracker-img.webp' description="A crypto tracker web app made with React, CoinGecko's API and other libraries." github='https://github.com/FelBenini/crypto_tracker' livedemo={true} livedemolink='https://crypto-tracker-fb.vercel.app/' />
                <Card name='Todo App' img='/img/todo-app-img.webp' description='A task manager made with React, TypeScript, cookies and other libraries like Material UI.' github='https://github.com/FelBenini/todo-app' livedemo={true} livedemolink='https://todo-app-felbenini.vercel.app/' />
                <Card name='QR Code Generator' img='https://felipe-benini.netlify.app/img/project_4.png' description='A QR Code generator made with HTML 5, CSS 3, JavaScript, the jQuery library and an API.' github='https://github.com/FelBenini/qr-code-generator' livedemo={true} livedemolink='https://liveqr-code-generator.netlify.app/' />
            </div>
            <Link to='/projects' style={{width: '180px', margin: '36px auto', textDecoration: 'none'}}><Button sx={{width: '180px'}} variant="outlined" color='secondary'>More Projects</Button></Link>
        </section>
    )
}

export default ProjectsSection