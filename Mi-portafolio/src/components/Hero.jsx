import { Container, Row, Col } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import profileImg from '../assets/c998cb71-0393-4104-87c4-b1377df5fcc2.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center gy-5">
          {/* Main Info */}
          <Col lg={7} className="order-2 order-lg-1">
            <div className="hero-status-pill">
              <span className="status-indicator-live" />
              <span>Disponible para nuevos proyectos & freelance</span>
            </div>

            <h1 className="hero-title">
              Desarrollador Web
              <span className="hero-title-highlight">Full Stack.</span>
            </h1>

            <p className="hero-subtitle">
              Diseño y desarrollo aplicaciones completas de punta a punta. Con base sólida en{' '}
              <strong>arquitectura de bases de datos</strong>, <strong>APIs escalables</strong> y{' '}
              <strong>experiencias de usuario fluidas y performantes</strong>.
            </p>

            {/* Actions */}
            <div className="hero-actions">
              <a href="#projects" className="btn-hero-main">
                <span>Ver proyectos seleccionados</span>
                <FiArrowUpRight size={18} />
              </a>

              <a
                href="mailto:juanmaximilianoprieto19@gmail.com"
                className="btn-hero-ghost"
              >
                <FiMail size={16} />
                <span>Contactar</span>
              </a>

              <div className="hero-socials">
                <a
                  href="https://github.com/maxip123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/juan-maximiliano-prieto-212116352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Micro highlights */}
            <div className="hero-focal-points">
              <div className="focal-item">
                <span className="focal-title">Stack Principal</span>
                <span className="focal-desc">Node.js · Express · React · MySQL</span>
              </div>
              <div className="focal-separator" />
              <div className="focal-item">
                <span className="focal-title">Formación</span>
                <span className="focal-desc focal-desc-accent">Técnico Univ. en Programación (UTN)</span>
              </div>
            </div>
          </Col>

          {/* Profile Visual */}
          <Col lg={5} className="order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
            <div className="hero-portrait-card">
              <div className="hero-portrait-frame">
                <img
                  src={profileImg}
                  alt="Maximiliano Prieto"
                  className="hero-portrait-image"
                />
              </div>
              <div className="hero-portrait-caption">
                <div>
                  <div className="portrait-name">Maximiliano Prieto</div>
                  <div className="portrait-role">Tucumán, Argentina</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
