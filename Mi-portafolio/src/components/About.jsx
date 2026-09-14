import { Container, Row, Col } from 'react-bootstrap';
import { FiLayers, FiDatabase, FiCpu } from 'react-icons/fi';
import aboutImg from '../assets/73fe4d21-0aad-4e55-b46a-e2c3da0bc70d.jpg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-header-clean">
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-subtitle">
            Técnico en programación y desarrollador full stack con enfoque en código mantenible,
            arquitectura sólida y producto real.
          </p>
        </div>

        <Row className="align-items-center gy-5 gx-lg-5">
          <Col lg={7}>
            <div className="about-narrative">
              <p className="about-lead">
                Egresado como <strong>Técnico Universitario en Programación</strong> de la{' '}
                <strong>Universidad Tecnológica Nacional (UTN - FRT)</strong>, combino fundamentos
                teóricos con experiencia práctica en el desarrollo de aplicaciones web de uso comercial y productivo.
              </p>
              <p className="about-text">
                Mi trabajo diario se concentra en el ecosistema <strong>JavaScript/TypeScript</strong>:{' '}
                desarrollo de servicios backend con <strong>Node.js</strong> y <strong>Express</strong>, modelado y persistencia en{' '}
                <strong>MySQL</strong>, <strong>PostgreSQL</strong> y <strong>MongoDB</strong>, y construcción de interfaces dinámicas con <strong>React</strong> y <strong>Vite</strong>.
              </p>
              <p className="about-text">
                En mis proyectos freelance he participado activamente en todo el ciclo de vida: desde el análisis de requerimientos del cliente y el modelado de datos, hasta la implementación del frontend y la puesta en marcha.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <FiDatabase size={20} />
                </div>
                <div>
                  <h3 className="pillar-title">Persistencia & APIs</h3>
                  <p className="pillar-desc">
                    Modelado relacional estructurado, consultas eficientes, autenticación y endpoints REST seguros.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <FiLayers size={20} />
                </div>
                <div>
                  <h3 className="pillar-title">Frontend Componentizado</h3>
                  <p className="pillar-desc">
                    Interfaces intuitivas, responsivas y accesibles creadas con React, Vite y optimización de carga.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <FiCpu size={20} />
                </div>
                <div>
                  <h3 className="pillar-title">Resolución Práctica</h3>
                  <p className="pillar-desc">
                    Soluciones directas adaptadas a necesidades comerciales concretas, sin sobreingeniería innecesaria.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5} className="d-flex justify-content-center">
            <div className="about-figure">
              <div className="about-image-frame">
                <img
                  src={aboutImg}
                  alt="Maximiliano Prieto en su exposición académica"
                  className="about-image"
                />
              </div>
              <div className="about-image-meta">
                <span className="about-meta-tag">Exposición de proyecto final</span>
                <span className="about-meta-sub">UTN Regional Tucumán</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
