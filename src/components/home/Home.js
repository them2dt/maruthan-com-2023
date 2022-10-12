import "./home.css";
import ContactForm from "../contact/Contact";
/* import Modal from "../modal/Modal";*/
import Skills from "../skills/Skills";
import keymount from "../../media/keymount.jpg";
import logo from "../../media/logo.png";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion,useScroll } from "framer-motion";
import { useState, useEffect } from "react";

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function App() {
  const [hiding, setHiding] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [count, setCount] = useState(0);
  const {scrollYProgress} = useScroll();

  const scrollValue = scrollYProgress.get();



  
  /*   const [modalOpen, setModalOpen] = useState(false);

  const open = () => {
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen(false);
  }; */
  const hideSwitchHandler = (event) => {
    setHiding(event.target.checked);
  };
  const dragSwitchHandler = (event) => {
    setDragging(event.target.checked);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#006836",
      },
      secondary: {
        main: "#d4dfb3",
      },
    },
  });

  useEffect(() => {
    if (hiding) {
      const elements = document.getElementsByClassName("secondary");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("invisible");
      }
      console.log("hiding enabled!");
    } else if (!hiding) {
      const elements = document.getElementsByClassName("secondary");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("invisible");
      }
      console.log("checked");
    }
  });

  const resume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1XUdDTH4Fe1PhAhP47VryatyFT2SZA4yL/view";
  };
  return (
    <div className="app">
      <div id="navbar" className="navbar">
        <div className="navbar-content">
          <div className="navbar-content-left">
            <div className="navbar-content-left-content">
              <div className="navbar-content-left-content-logo">
                <img src={logo} alt="logo" />
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
                <motion.button onClick={resume}>Resume</motion.button>
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
                      <motion.button
                        onClick={() => {
                          window.location.href =
                            "https://play.google.com/store/apps/details?id=app.emptea.keymount";
                        }}
                      >
                        check it out!
                      </motion.button>
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
          <div className="skillset-content-modifications">
            <div className="skillset-content-modifications-content">
              <div className="switches">
                <div className="switch">
                  Hide secondary skills
                  <ThemeProvider theme={theme}>
                    <Switch
                      color="secondary"
                      checked={hiding}
                      onChange={hideSwitchHandler}
                    />
                  </ThemeProvider>
                </div>
                <div className="switch">
                  Enable dragging
                  <ThemeProvider theme={theme}>
                    <Switch
                      color="secondary"
                      checked={dragging}
                      onChange={dragSwitchHandler}
                    />
                  </ThemeProvider>
                </div>
              </div>
              <button
                className="restart-skills"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <motion.i
                  variants={{
                    rest: { rotate: 0, color: "#d4dfb3" },
                    hover: { color: "white", transition: { duration: 0.4 } },
                    tap: { scale: 0.6, rotate: 180 },
                  }}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  class="fa-solid fa-rotate-right"
                ></motion.i>
              </button>
            </div>
          </div>
          <Skills dragEnabled={dragging} key={count} />
        </div>
      </div>
      <div id="contact" className="collab">
        <ContactForm />
      </div>
      <div id="footer" className="footer">
        <div className="footer-content">
          <p>Developed by Maruthan Thanabalasingam.</p>
        </div>
      </div>
      <div className="links">
        <p>
          <a href="https://github.com/them2dt">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </p>
        <p>
          <a href="https://linkedin.com/in/maruthan">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </p>
        <p>
          <a href="mailto:maruthan@outlook.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </p>
        <div className="line-wrapper">
          <div className="line"></div>
        </div>
      </div>
      {/* <AnimatePresence>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence> */}
    </div>
  );
}

export default App;
