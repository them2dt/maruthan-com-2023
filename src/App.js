import "./App.css"; 
import keymount from "./keymount.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
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
              <a className="navbar-content-right-content-anchor" href="#header">
                <p>Projects</p>
              </a>
              <a className="navbar-content-right-content-anchor" href="#header">
                <p>Skillset</p>
              </a>
              <a className="navbar-content-right-content-anchor" href="#header">
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

          <div className="skillset-content-main-skills">
            <div className="skillset-content-main-skills-content"></div>
          </div>
          <div className="skillset-content-carousel-title">
            <h3>Other skills</h3>
          </div>
          <div className="skillset-content-carousel">
            <button className="skill">JavaScript</button>
            <button className="skill">EcmaScript</button>
            <button className="skill">Dart</button>
            <button className="skill">HTML5</button>
            <button className="skill">CSS3</button>
            <button className="skill">PHP</button>
            <button className="skill">React.js</button>
            <button className="skill">Flutter</button>
            <button className="skill">Firebase</button>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div id="collab" className="collab"></div>
      <div id="footer" className="footer"></div>
    </div>
  );
}

export default App;
