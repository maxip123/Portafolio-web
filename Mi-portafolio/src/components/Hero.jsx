import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="justify-content-start">
          <Col lg={8} xl={7}>

            <div className="hero-badge fade-in-up">
              <span className="hero-badge-dot" />
              Disponible para proyectos freelance
            </div>

            <h1 className="hero-title fade-in-up fade-in-up-delay-1">
              Desarrollador<br />
              <span className="accent-word">Fullstack</span>
            </h1>

            <p className="hero-subtitle fade-in-up fade-in-up-delay-2">
              Construyo aplicaciones web escalables de punta a punta. Especializado
              en <strong>APIs robustas</strong>, arquitectura de <strong>bases de datos</strong>{' '}
              e interfaces de usuario modernas y performantes.
            </p>

            <div className="d-flex align-items-center gap-3 flex-wrap fade-in-up fade-in-up-delay-3">
              <Button
                href="#projects"
                className="btn-hero-primary d-flex align-items-center gap-2"
                as="a"
              >
                Ver Proyectos <FiArrowRight />
              </Button>

              <Button
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-icon"
                as="a"
                title="GitHub"
              >
                <FiGithub />
              </Button>

              <Button
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-icon"
                as="a"
                title="LinkedIn"
              >
                <FiLinkedin />
              </Button>
            </div>

            <div className="hero-stats fade-in-up fade-in-up-delay-4">
              <div>
                <div className="hero-stat-number">3+</div>
                <div className="hero-stat-label">Proyectos reales</div>
              </div>
              <div>
                <div className="hero-stat-number">5+</div>
                <div className="hero-stat-label">Tecnologías</div>
              </div>
              <div>
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-label">Dedicación</div>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}
