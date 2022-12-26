import './App.css';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skill from './Components/Skill/Skill';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Welcome/>
        <Skill/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
