import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Container } from 'reactstrap';
import { useEffect } from 'react';
import Socials from './components/Socials';

function App() {

  document.addEventListener('mousemove', function (e) {
    let x = e.clientX - 10;
    let y = e.clientY - 10;

    let cursor = document.querySelector('.ball');
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  });

  useEffect(() => {
    const animation_elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in');
      })

    }, {threshold: 0.1});
    animation_elements.forEach((item) => {
      observer.observe(item);
    })

    const navigation_elements = document.querySelectorAll('[data-nav]');
    const observer_nav = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let navLi = document.querySelectorAll("a.nav-link");
          let nav = '#' + entry.target.getAttribute("data-nav");

          navLi.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === nav) link.classList.add("active");
          });
        }
      })
    }, {threshold: 0.1});    
    navigation_elements.forEach((item) => {
      observer_nav.observe(item);
    })
  });

  return (
    <>
      <header className="base-color">
          <Navigation />
      </header>
      <main>
        <div className="ball"></div>
        <Container>
          <Home />
        </Container>
        <div className='custom-background top-border'>
          <Container className='mt-0'>
            <About />
          </Container>
        </div>
        <div className='base-color-2 bottom-border'>
          <Container className='mt-0'>
            <Skills />
            <Projects />
          </Container>
        </div>
        <Container className='mt-0'>
          <Contact />
        </Container>
        <Socials />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
