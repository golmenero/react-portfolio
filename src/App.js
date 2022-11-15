import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main class="page">
        <About />
        <Contact />
    </main>
    </>
  );
}

export default App;
