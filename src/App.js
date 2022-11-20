import { Container } from 'reactstrap';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <header>
        <Navigation />
    </header>
    <main>
      <Container>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </main>
    </>
  );
}

export default App;
