import { Container, Row, Col } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-section">
      <Container>
        {/* Contact Banner */}
        <div className="footer-cta-card">
          <Row className="align-items-center gy-4">
            <Col lg={7}>
              <h2 className="cta-title">¿Tienes un proyecto en mente?</h2>
              <p className="cta-desc">
                Estoy disponible para incorporarme a equipos de desarrollo o colaborar en proyectos freelance.
                Hablemos sobre cómo puedo aportar valor técnico a tu idea.
              </p>
            </Col>
            <Col lg={5} className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
              <a
                href="mailto:juanmaximilianoprieto19@gmail.com"
                className="btn-cta-primary"
              >
                <FiMail size={16} />
                <span>Enviar un email</span>
                <FiArrowUpRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-maximiliano-prieto-212116352"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-secondary"
              >
                <FiLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </Col>
          </Row>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <Row className="align-items-center gy-3">
            <Col xs={12} md={6}>
              <div className="footer-brand">
                <span className="footer-name">Maximiliano Prieto</span>
                <span className="footer-separator">·</span>
                <span className="footer-role">Desarrollador Web Full Stack</span>
              </div>
              <div className="footer-copy">
                © {year} Tucumán, Argentina · Diseñado y desarrollado con React & Vite
              </div>
            </Col>

            <Col xs={12} md={6} className="d-flex justify-content-md-end gap-3">
              <a
                href="https://github.com/maxip123"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                aria-label="GitHub"
              >
                <FiGithub size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/juan-maximiliano-prieto-212116352"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:juanmaximilianoprieto19@gmail.com"
                className="footer-nav-link"
                aria-label="Email"
              >
                <FiMail size={15} />
                <span>Email</span>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
