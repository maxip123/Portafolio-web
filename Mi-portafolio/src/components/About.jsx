import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../assets/73fe4d21-0aad-4e55-b46a-e2c3da0bc70d.jpg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-header">
          <span className="section-tag">Acerca de mí</span>
          <h2 className="section-title">Sobre mí</h2>
        </div>

        <Row className="align-items-center g-5">
          <Col lg={7}>
            <div className="about-text-block">
              <p className="about-paragraph">
                Desarrollador Web Full Stack con un enfoque sólido en la creación de aplicaciones
                escalables y eficientes. Soy Técnico Universitario en Programación egresado de la UTN.
              </p>
              <p className="about-paragraph">
                Mi stack principal se centra en el ecosistema JavaScript:{' '}
                <strong>Node.js</strong>, <strong>Express</strong> y <strong>React (Vite)</strong>,
                con una fuerte base en gestión de bases de datos relacionales como{' '}
                <strong>MySQL</strong> y <strong>PostgreSQL</strong>. Me apasiona transformar ideas
                complejas en código limpio y funcional, siempre priorizando la experiencia del usuario
                y el rendimiento del servidor.
              </p>
              <p className="about-paragraph">
                Como desarrollador freelance, he liderado proyectos desde la concepción del backend
                hasta el despliegue del frontend, lo que me ha permitido desarrollar una visión
                integral del ciclo de vida del software.
              </p>
            </div>
          </Col>

          <Col lg={5} className="d-flex justify-content-center">
            <div className="about-photo-wrap">
              <img src={aboutImg} alt="Juan M. en su exposición final" className="about-photo-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
