import './index.css';

import PortfolioNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <PortfolioNavbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Divider */}
        <div className="section-divider" />

        {/* Featured Projects */}
        <Projects />

        {/* Divider */}
        <div className="section-divider" />

        {/* Skills */}
        <Skills />

        {/* Divider */}
        <div className="section-divider" />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
