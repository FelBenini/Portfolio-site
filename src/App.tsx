import React from 'react';
import './style/App.css';
import Typewriter from 'typewriter-effect'

function App() {
  return (
    <div className="App">
      <section id="heroSection">
        <div id="heroSectionText">
          <h5>Hey there, I am</h5>
          <h1>Felipe Benini</h1>
          <h3>
          <Typewriter
            options={{
              strings: ['a Web Developer', 'a Full Stack Engineer', 'a Web Designer', 'a Full Stack Developer'],
              autoStart: true,
              loop: true,
              delay: 200
            }} />
            </h3>
        </div>
      </section>
    </div>
  );
}

export default App;
