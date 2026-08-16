import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function PortfolioNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`portfolio-navbar ${scrolled ? 'scrolled' : ''}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-text">
          Maximiliano Prieto
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-nav" />

        <Navbar.Collapse id="portfolio-nav" className="justify-content-end">
          <Nav className="align-items-lg-center gap-1 me-3">
            <Nav.Link href="#about" className="nav-link-custom">Sobre mí</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Proyectos</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Habilidades</Nav.Link>
          </Nav>

          {/* Íconos sociales */}
          <div className="navbar-social-icons">
            <a
              href="mailto:juanmaximilianoprieto@hotmail.com"
              className="navbar-social-link"
              title="Email"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <a
              href="https://github.com/maxip123"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-link"
              title="GitHub"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-maximiliano-prieto-212116352"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-link"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
