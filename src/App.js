import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Container } from 'reactstrap';

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

    document.body.style.backgroundPosition = newvalueX + "px     " + newvalueY + "px";

    let x = e.clientX - 10;
    let y = e.clientY - 10;

    let cursor = document.querySelector('.ball');
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  });

  document.addEventListener('scroll', function (e) {
    let sections = document.querySelectorAll("section");
    let navLi = document.querySelectorAll("a.nav-link");
    let current = "";

    sections.forEach((section) => {
      var docViewTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var elemTop = section.offsetTop;
  
      if (elemTop + 500 >= docViewTop && !current) current = "#" + section.getAttribute("id");
    });

    if (current) {
      navLi.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") == current) link.classList.add("active");
      });
    }
  });

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <div className="ball"></div>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
