import { motion } from "framer-motion";
import Switch from "@mui/material/Switch";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//components
import Skills from "./Skills";
//media
import logo from "../media/logo.png";

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

function App() {
  const [hiding, setHiding] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [count, setCount] = useState(0);
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
    } else if (!hiding) {
      const elements = document.getElementsByClassName("secondary");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("invisible");
      }
    }
  });
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
              <a
                className="navbar-content-right-content-anchor"
                href="https://data.emptea.xyz/documents/CV.pdf"
                target={"_blank"}
                rel="noreferrer"
              >
                <p>Resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="header" className="header">
        <div className="header-content">
          <div className="header-content-text-panel">
            <div className="header-content-text-panel-title">
              Maruthan Thanabalasingam
            </div>
            <div className="header-content-text-panel-subtext">
              <p>Web Developer with a passion for Blockchain.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
        <div className="projects-content">
          <div className="projects-title">Featured Projects</div>
          <div className="projects-grid">
            <div className="project">
              <div className="project-content">
                <div className="project-text">
                  <div className="project-title">Campaigns</div>
                  <div className="project-description">
                    Crowdfunding platform on the solana-blockchain. Live on
                    devnet.
                  </div>
                </div>

                <a
                  href="https://campaigns.emptea.xyz"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="project-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="project">
              <div className="project-content">
                <div className="project-text">
                  <div className="project-title">Oxygen</div>
                  <div className="project-description">
                    App to create NFT's on Solana.
                  </div>
                </div>

                <a
                  href="https://oxygen.emptea.xyz"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="project-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="project">
              <div className="project-content">
                <div className="project-text">
                  <div className="project-title">News</div>
                  <div className="project-description">
                    Newsfeed for the blockchain-industry.
                  </div>
                </div>

                <a
                  href="https://news.emptea.xyz"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="project-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="project">
              <div className="project-content">
                <div className="project-text">
                  <div className="project-title">Keymount</div>
                  <div className="project-description">
                    Password manager with built-in tools.
                  </div>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=app.emptea.keymount"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="project-link">{"->"}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skillset" className="skillset">
        <div className="skillset-content">
          <div className="skillset-content-title">Skillset</div>
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
                  className="fa-solid fa-rotate-right"
                ></motion.i>
              </button>
            </div>
          </div>
          <Skills dragEnabled={dragging} key={count} />
        </div>
      </div>
      <div className="contact" id="contact">
        <a href="mailto:maruthan@skiff.com" target={"_blank"} rel="noreferrer">
          Let's work together!
        </a>
      </div>
      <div id="footer" className="footer">
        <div className="footer-content">
          <p>Developed by Maruthan Thanabalasingam.</p>
        </div>
      </div>
      <div className="links">
        <p>
          <a href="https://github.com/them2dt">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
        <p>
          <a href="https://linkedin.com/in/maruthan">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </p>
        <p>
          <a href="mailto:maruthan@skiff.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </p>
        <div className="line-wrapper">
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
