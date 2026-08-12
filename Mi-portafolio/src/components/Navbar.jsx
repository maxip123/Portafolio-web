import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

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
          Juan M. Dev
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-nav" />

        <Navbar.Collapse id="portfolio-nav" className="justify-content-end">
          <Nav className="align-items-lg-center gap-1 me-3">
            <Nav.Link href="#about" className="nav-link-custom">Sobre mí</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Proyectos</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Habilidades</Nav.Link>
          </Nav>
          <Button
            href="#contact"
            className="btn-contact-nav"
            as="a"
          >
            Contacto
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
