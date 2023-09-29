import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import About from './components/About/about';
import Project from './components/Projects/project';

function App() {

  

  return (
    <div className="App">
     <Navbar />
     <Intro />
     <About/>
     <Skills />
     <Project />
    </div>
  );
}

export default App;
