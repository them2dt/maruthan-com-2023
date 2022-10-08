import "./App.css";
import ContactForm from "./components/Contact";
import keymount from "./keymount.jpg";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState, useEffect } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#006836",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#d4dfb3",
      },
    },
  });

  useEffect(() => {
    if (checked) {
      const elements = document.getElementsByClassName("secondary");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("invisible");
      }
      console.log("checked");
    } else if (!checked) {
      const elements = document.getElementsByClassName("secondary");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("invisible");
      }
      console.log("checked");
    }
  });

  return (
    <div className="app">
      <div id="navbar" className="navbar">
        <div className="navbar-content">
          <div className="navbar-content-left">
            <div className="navbar-content-left-content">
              <div className="navbar-content-left-content-logo">
                <p>MT</p>
              </div>
            </div>
          </div>
          <div className="navbar-content-right">
            <div className="navbar-content-right-content">
              <a
                className="navbar-content-right-content-anchor"
                href="#about-me"
              >
                <p>About Me</p>
              </a>
              <a
                className="navbar-content-right-content-anchor"
                href="#projects"
              >
                <p>Projects</p>
              </a>
              <a
                className="navbar-content-right-content-anchor"
                href="#skillset"
              >
                <p>Skillset</p>
              </a>
              <a
                className="navbar-content-right-content-anchor"
                href="#contact"
              >
                <p>Contact</p>
              </a>
              <div className="navbar-content-right-content-resume">
                <button>Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header" className="header">
        <div className="header-content">
          <div className="header-content-text-panel">
            <div className="header-content-text-panel-title">
              <h1>Maruthan Thanabalasingam</h1>
            </div>
            <div className="header-content-text-panel-subtext">
              <p>Software Developer.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-me" className="about-me">
        <div className="about-me-content">
          <div className="about-me-content-panel">
            <div className="about-me-content-panel-title">
              <h2>About me</h2>
            </div>
            <div className="about-me-content-panel-text">
              <p>
                Hello world! My name is Maruthan Thanabalasingam and I am a
                software developer.
                <br />
                <br />
                I got into computer science 3 years ago, when i attended a
                computer science school in Zurich. Since then it has been a
                interesting journey.
                <br />
                <br />
                My main focus is on building digital experiences, with an eye
                for design. I'm also very interested in disruptive technologies
                like Solana Progams or Smart Contracts on Ethereum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
        <div className="projects-content">
          <div className="projects-content-title">
            <h2>Projects</h2>
          </div>
          <div className="projects-content-subtext">
            <p>Learning by doing.</p>
          </div>
          <div className="projects-content-grid">
            <div className="project">
              <div className="project-content">
                <div className="project-content-info">
                  <div className="project-content-info-content">
                    <div className="project-content-info-content-type">
                      Mobile Application
                    </div>
                    <div className="project-content-info-content-title">
                      Keymount
                    </div>
                    <div className="project-content-info-content-text">
                      The password manager without password. Keymount is an
                      mobile application, managing your password offline. The
                      app also offers users useful tools like a password
                      validator and generator. From the first "Hello world" to
                      the publishing in the Google Play Store, this was a
                      interesting solo-project i really enjoyed working on.
                    </div>
                    {/* <div className="project-content-info-content-tools">
                      <i class="devicon-dart-plain"></i>
                      <i class="devicon-flutter-plain"></i>
                      <i class="devicon-sqlite-plain"></i>
                    </div> */}
                    <div className="project-content-info-content-buttons">
                      <button>check it out!</button>
                    </div>
                  </div>
                </div>
                <div className="project-content-image">
                  <img src={keymount} alt="keymount" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skillset" className="skillset">
        <div className="skillset-content">
          <div className="skillset-content-title">
            <h2>Skillset</h2>
          </div>
          <div className="skillset-content-subtext">
            <p>A brief overview of my skills.</p>
          </div>
          {/**Toggle switch  to sort out the irrelevant stuff*/}
          <div className="skillset-content-switch-container">
            <p>Hide secondary skills </p>
            <ThemeProvider theme={theme}>
              <Switch
                color="secondary"
                checked={checked}
                onChange={switchHandler}
              />
            </ThemeProvider>
          </div>
          <div className="skillset-content-carousel">
            <button className="skill">JavaScript</button>
            <button className="skill secondary">TypeScript</button>
            <button className="skill">Dart</button>
            <button className="skill secondary">HTML5</button>
            <button className="skill secondary">CSS3</button>
            <button className="skill secondary">PHP</button>
            <button className="skill">React.js</button>
            <button className="skill">Flutter</button>
            <button className="skill">Firebase</button>
            <button className="skill">MySQL</button>
            <button className="skill secondary">SQLite</button>
            <button className="skill secondary">Python</button>
            <button className="skill secondary">TKinter</button>
            <button className="skill secondary">PyGame</button>
            <button className="skill secondary">Github</button>
            <button className="skill secondary">Heroku</button>
            <button className="skill secondary">Vercel</button>
            <button className="skill secondary">openweathermap</button>
            <button className="skill secondary">Material UI</button>
            <button className="skill secondary">Font Awesome</button>
            <button className="skill secondary">Framer Motion</button>
            <button className="skill secondary">Bootstrap</button>
            <button className="skill secondary">ScrollMagic</button>
            <button className="skill secondary">Swiper.js</button>
            <button className="skill secondary">Node.js</button>
            <button className="skill">Adobe Illustrator</button>
            <button className="skill secondary">Adobe Fresco</button>
            <button className="skill">Adobe XD</button>
            <button className="skill secondary">Adobe Express</button>
            <button className="skill">Figma</button>
            <button className="skill secondary">Microsoft Word</button>
            <button className="skill secondary">Microsoft Excel</button>
            <button className="skill secondary">Microsoft PowerPoint</button>
            <button className="skill">Anchor</button>
            <button className="skill">Solana CLI</button>
            <button className="skill secondary">Solidity</button>
            <button className="skill secondary">Wordpress</button>
            <button className="skill secondary">Shopify</button>
            <button className="skill secondary">Java</button>
          </div>
        </div>
      </div>
      <div id="collab" className="collab">
        <ContactForm/>
      </div>
      <div id="footer" className="footer"></div>
    </div>
  );
}

export default App;
