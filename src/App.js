import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  /**
   * Event move background with cursor
   */
  var movementStrength = 25;
  var height = movementStrength / window.innerHeight;
  var width = movementStrength / window.innerWidth;

  document.addEventListener('mousemove', function (e) {
    var pageX = e.pageX - (window.innerWidth / 2);
    var pageY = e.pageY - (window.innerHeight / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;

    document.body.style.backgroundPosition = newvalueX+"px     "+newvalueY+"px";
  })

  return (
    <>
    <header>
        <Navigation />
    </header>
    <main>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="skills" element={<Skills />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
      </Routes>
    </main>
    </>
  );
}

export default App;
