import { Navigate, Route, Routes} from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  /**
   * Event move background with cursor
   */
   var movementStrength = 10;
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
          <Route path="/" element={<Navigate to="./about" />} />
          <Route path="./about" element={<About />}></Route>
          <Route path="./skills" element={<Skills />}></Route>
          <Route path="./projects" element={<Projects />}></Route>
          <Route path="./contact" element={<Contact />}></Route>
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
