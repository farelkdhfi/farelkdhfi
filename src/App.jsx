import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f2] text-neutral-950">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

export default App;