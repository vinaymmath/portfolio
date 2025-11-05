import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Skills from "./components/skills/Skills"
import Reachout from "./components/reachout/Reachout"

function App() {
  return (
    <>
      <div className="page">
        <div className="page__wrap">
          <div className="page__nav">
            <div className="page__nav-header--empty"></div>
            <div className="page__nav-header">
              <Header></Header>
            </div>
          </div>
          <div className="page__routes" id="home">
            <div className="page__intro" id="intro">
              <div className="section">
                <Intro></Intro>
              </div>
            </div>
            <div className="page__content" id="about">
              <div className="section">
                <About></About>
              </div>
              <div className="section" id="experience">
                <Experience></Experience>
              </div>
              <div className="section" id="skills">
                <Skills></Skills>
              </div>
              <div className="section" id="reachout">
                <Reachout></Reachout>
              </div>
              <div className="section" id="reachout">
                <p>Made by <span className="highlight">Vinay M</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App