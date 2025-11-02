import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import HomeSvg from "./assets/icons/home.svg"
import FolderSvg from "./assets/icons/folder.svg"

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="nav-h">
          <div className="v-section-header">
            <Header></Header>
          </div>
        </div>
        <div className="container-restricted">
          <div className="v-section">
            <Intro></Intro>
          </div>
          <div className="v-section">
            <Skills></Skills>
          </div>
          <div className="v-section">
            <Skills></Skills>
          </div>
        </div>
      </div>
    </>
  )
}

export default App