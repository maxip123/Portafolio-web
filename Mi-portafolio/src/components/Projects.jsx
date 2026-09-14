import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { FiExternalLink, FiLayers } from 'react-icons/fi';

/* ─── Imports de imágenes: Lomas Fight ─── */
import lomasImg1 from '../assets/Lomas fight/WhatsApp Image 2026-08-16 at 5.04.2537 PM.jpeg';
import lomasImg2 from '../assets/Lomas fight/WhatsApp Image 2026-08-16 at 5.04.257 PM.jpeg';
import lomasImg3 from '../assets/Lomas fight/WhatsApp Image 2026-08-16 at 5.04.537 PM.jpeg';
import lomasImg4 from '../assets/Lomas fight/WhatsApp Image 2026-08-16 at 5.04.57 PM.jpeg';
import lomasImg5 from '../assets/Lomas fight/WhatsApp Image 2026-08-16 at 5.043.57 PM.jpeg';
import lomasImg6 from '../assets/Lomas fight/WhatsApp Image 2026-08-16 at 5.044.57 PM.jpeg';

/* ─── Imports de imágenes: Unlimited Training ─── */
import unlimitedImg1 from '../assets/Unlimited training/1769995998649.jpg';
import unlimitedImg2 from '../assets/Unlimited training/1769995998674.jpg';
import unlimitedImg3 from '../assets/Unlimited training/1769995998710.jpg';
import unlimitedImg4 from '../assets/Unlimited training/1769995998726.jpg';
import unlimitedImg5 from '../assets/Unlimited training/1769995998751.jpg';
import unlimitedImg6 from '../assets/Unlimited training/1769995998858.jpg';

/* ─── Imports de imágenes: GPS Distribuciones ─── */
import gpsImg1 from '../assets/GPS-Distribuciones/WhatsApp Image 2026-09-13 at 8.14.49 PM.jpeg';
import gpsImg2 from '../assets/GPS-Distribuciones/WhatsApp Image 2026-09-13 at 8.14.53 PM.jpeg';
import gpsImg3 from '../assets/GPS-Distribuciones/WhatsApp Image 2026-09-13 at 8.15.01 PM.jpeg';

/* ─── Datos de proyectos ─── */
const projects = [
  {
    id: 'lomas-fight',
    category: 'Sistema de Gestión Integral',
    title: 'Lomas Fight',
    description:
      'Sistema de gestión integral con dashboards analíticos en tiempo real, control de cuotas, seguimiento de socios y reportes de ingresos. Incluye módulo de pagos con historial detallado.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'React'],
    liveUrl: 'https://www.lomasfight.com/',
    slides: [lomasImg1, lomasImg2, lomasImg3, lomasImg4, lomasImg5, lomasImg6],
  },
  {
    id: 'argentinas-del-norte',
    category: 'Gestión Deportiva & Landing',
    title: 'Argentinas del Norte',
    description:
      'Plataforma integral para la gestión de partidos y torneos de Futsal AFA de Argentinos del Norte. Incluye administración de finanzas del club y una landing integrada para difusión de información.',
    stack: ['React', 'Node.js', 'MySQL', 'TypeScript'],
    liveUrl: null, // Proyecto en desarrollo
    slides: null,
  },
  {
    id: 'unlimited-fitness',
    category: 'Web & Entrenamiento',
    title: 'Unlimited Fitness',
    description:
      'Sitio web profesional para un entrenador personal. Presenta los servicios ofrecidos, planes de entrenamiento, testimonios de clientes y un formulario de contacto para consultas y turnos.',
    stack: ['React', 'Express', 'MongoDB', 'Tailwind'],
    liveUrl: 'https://unlimitedtraining.vercel.app/',
    slides: [unlimitedImg1, unlimitedImg2, unlimitedImg3, unlimitedImg4, unlimitedImg5, unlimitedImg6],
  },
  {
    id: 'gps-distribuciones',
    category: 'Catálogo Virtual Comercial',
    title: 'GPS Distribuciones',
    description:
      'Catálogo virtual interactivo diseñado para la exploración y visualización ágil de productos. Cuenta con una interfaz moderna y responsiva, navegación intuitiva y estilos personalizados.',
    stack: ['React', 'Vite', 'Tailwind', 'CSS'],
    liveUrl: 'https://www.catalogo-gpsdistribuciones.com/',
    slides: [gpsImg1, gpsImg2, gpsImg3],
  },
];

/* ─── Slide con imagen real ─── */
function ImageSlide({ src, alt }) {
  return (
    <div className="project-slide-container">
      <img
        src={src}
        alt={alt}
        className="project-slide-img"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Slide architectural mockup para proyectos en desarrollo ─── */
function ArchitecturalPlaceholder() {
  return (
    <div className="project-blueprint-slide">
      <div className="blueprint-grid-overlay" />
      <div className="blueprint-content">
        <div className="blueprint-icon-ring">
          <FiLayers size={24} />
        </div>
        <div className="blueprint-title">Argentinas del Norte — Futsal AFA</div>
        <div className="blueprint-badge">En fase de desarrollo activo</div>
      </div>
    </div>
  );
}

/* ─── Tarjeta de proyecto ─── */
function ProjectCard({ project }) {
  return (
    <Card className="project-card h-100">
      {/* Media Header */}
      <div className="project-media-wrapper">
        <div className="project-category-tag">
          {project.category}
        </div>

        {project.slides ? (
          <Carousel
            interval={3500}
            controls={true}
            indicators={true}
            fade={false}
            pause="hover"
            className="project-carousel"
          >
            {project.slides.map((src, i) => (
              <Carousel.Item key={i}>
                <ImageSlide src={src} alt={`${project.title} - captura ${i + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <ArchitecturalPlaceholder />
        )}
      </div>

      {/* Body */}
      <Card.Body className="project-body">
        <div className="project-header">
          <Card.Title className="project-title">{project.title}</Card.Title>
        </div>

        <Card.Text className="project-desc">{project.description}</Card.Text>

        {/* Tech Stack Pills */}
        <div className="project-stack-wrap">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>

        {/* Botón Ver sitio */}
        <div className="project-actions">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-live"
            >
              <span>Ver sitio en vivo</span>
              <FiExternalLink size={14} />
            </a>
          ) : (
            <div className="btn-project-pending">
              <span className="status-dot-pending" />
              <span>Despliegue próximo</span>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

/* ─── Sección principal ─── */
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="section-header-clean mb-5">
          <h2 className="section-title">Proyectos Seleccionados</h2>
          <p className="section-subtitle">
            Soluciones web desarrolladas desde la modelización del negocio y datos
            hasta interfaces de usuario interactivas de alto rendimiento.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={6}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
