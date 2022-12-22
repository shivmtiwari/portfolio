import './App.css';
import Hero from './Components/Hero';
import Icon from './Components/Icon';
import Navbar from './Components/Navbar';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project from './Components/Projects/Project';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Icon/>
   <About/>
   <Skills/>
   <Project/>
   </>
  );
}

export default App;
