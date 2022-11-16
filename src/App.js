import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main class="page">
        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
    </>
  );
}

export default App;
