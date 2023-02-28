import React from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer';

const PortfolioPage = () => {
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
        <section id='portfolio-page'>
            <div id='cards' onMouseMove={cardAnimation}>
                <Card name='CryptoTracker' img='/img/cryptotracker-img.webp' description="A crypto tracker web app made with React, CoinGecko's API and SASS." github='https://github.com/FelBenini/crypto_tracker' livedemo={true} livedemolink='https://crypto-tracker-fb.vercel.app/' />

                <Card name='Todo App' img='/img/todo-app-img.webp' description='A task manager made with React, TypeScript, cookies and other libraries like Material UI.' github='https://github.com/FelBenini/todo-app' livedemo={true} livedemolink='https://todo-app-felbenini.vercel.app/' />

                <Card name='QR Code Generator' img='https://felipe-benini.netlify.app/img/project_4.png' description='A QR Code generator made with HTML 5, CSS 3, JavaScript, the jQuery library and an API.' github='https://github.com/FelBenini/qr-code-generator' livedemo={true} livedemolink='https://liveqr-code-generator.netlify.app/' />

                <Card name='This Website' img='/img/portfolio-site-img.webp' description='My personal website made with React, TypeScript and SASS to introduce myself and my portfolio.' github='https://github.com/FelBenini/Portfolio-site' livedemo={true} livedemolink='https://felbenini.vercel.app/' />
                
                <Card name='TypeScript Calculator' img='/img/typescript-calculator.webp' description='A fully functional TypeScript calculator, made so I could get started with the TypeScript syntax.' github='https://github.com/FelBenini/TypeScript-Calculator' livedemo={true} livedemolink='https://typescript-calculator-fb.netlify.app/' />

                <Card name='Currency Converter' img='https://felipe-benini.netlify.app/img/project_5.png' description='A Currency converter application made with HTML, JavaScript, jQuery and CSS 3 and API for currency cotation.' github='https://github.com/FelBenini/currency_converter' livedemo={true} livedemolink='https://fb-currency-converter.netlify.app/' />

                <Card name='Glassmorphism Generator' img='/img/glassmorphism-generator-img.webp' description='A web app made with plain JavaScript that generates CSS 3 code to help creating glassmorphism effects.' github='https://github.com/FelBenini/glassmorphism-effect-generator' livedemo={true} livedemolink='https://glassmorphism-effect-generator.netlify.app/' />

                <Card name='JavaScript Calculator' img='https://felipe-benini.netlify.app/img/project_3.png' description='A simple but fully functional and debugged calculator made with JavaScript, HTML 5 and CSS3.' github='https://github.com/FelBenini/javascript_calculator' livedemo={true} livedemolink='https://javascript-html-calculator.netlify.app/' />

                <Card name='Old Portfolio' img='https://felipe-benini.netlify.app/img/project_1.png' description='My past personal website made with HTML 5, CSS 3 and JavaScript. Made to showcase my projects and skills!' github='https://github.com/FelBenini/website_portfolio' livedemo={true} livedemolink='https://felipe-benini.netlify.app/' />
            </div>
            <Footer />
        </section>
    )
}

export default PortfolioPage