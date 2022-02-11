
import './App.css';
import {Intro} from "./components/introduction"
import {About} from "./components/about"
import {Skills} from "./components/skills"
import {Projects} from "./components/projects"
import {Contact} from "./components/contact"

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
