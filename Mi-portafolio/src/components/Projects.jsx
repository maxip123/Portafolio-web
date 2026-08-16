import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi';

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

/* ─── Datos de proyectos ─── */
const projects = [
  {
    id: '01',
    title: 'Lomas Fight',
    description:
      'Sistema de gestión integral con dashboards analíticos en tiempo real, control de cuotas, seguimiento de socios y reportes de ingresos. Incluye módulo de pagos con historial detallado.',
    stack: ['Node.js', 'Express', 'MySQL', 'Prisma', 'React', 'Chart.js'],
    liveUrl: 'https://www.lomasfight.com/',
    slides: [lomasImg1, lomasImg2, lomasImg3, lomasImg4, lomasImg5, lomasImg6],
  },
  {
    id: '02',
    title: 'Futsal AFA',
    description:
      'Plataforma de gestión para torneos de fútbol sala. Administración de equipos, fixtures, tabla de posiciones y estadísticas de jugadores con panel de control completo.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
    slides: null, // sin imágenes aún
    placeholder: {
      bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
      accent: '#059669',
      emoji: '⚽',
      label: 'Futsal AFA',
    },
  },
  {
    id: '03',
    title: 'Unlimited Fitness',
    description:
      'Sitio web profesional para un entrenador personal. Presenta los servicios ofrecidos, planes de entrenamiento, testimonios de clientes y un formulario de contacto para consultas y turnos.',
    stack: ['React', 'Express', 'MySQL', 'Tailwind'],
    liveUrl: 'https://unlimitedtraining.vercel.app/',
    slides: [unlimitedImg1, unlimitedImg2, unlimitedImg3, unlimitedImg4, unlimitedImg5, unlimitedImg6],
  },
];

/* ─── Slide con imagen real ─── */
function ImageSlide({ src, alt }) {
  return (
    <div style={{ width: '100%', height: '220px', overflow: 'hidden', background: '#0f172a' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />
    </div>
  );
}

/* ─── Slide placeholder (cuando no hay imágenes) ─── */
function PlaceholderSlide({ placeholder }) {
  return (
    <div
      style={{
        width: '100%',
        height: '220px',
        background: placeholder.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        userSelect: 'none',
      }}
    >
      <span style={{ fontSize: '2.8rem', lineHeight: 1 }}>{placeholder.emoji}</span>
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: placeholder.accent,
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(6px)',
          padding: '4px 12px',
          borderRadius: '100px',
        }}
      >
        {placeholder.label}
      </span>
    </div>
  );
}

/* ─── Tarjeta de proyecto ─── */
function ProjectCard({ project }) {
  return (
    <Card className="project-card border-0 h-100">
      {/* Carousel */}
      <div style={{ overflow: 'hidden', borderRadius: '16px 16px 0 0', position: 'relative' }}>
        <span
          className="project-number"
          style={{ position: 'absolute', top: 12, left: 12, zIndex: 10 }}
        >
          {project.id}
        </span>

        {project.slides ? (
          <Carousel
            interval={3000}
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
          <PlaceholderSlide placeholder={project.placeholder} />
        )}
      </div>

      {/* Body */}
      <Card.Body className="project-body">
        <Card.Title className="project-title">{project.title}</Card.Title>
        <Card.Text className="project-desc">{project.description}</Card.Text>

        {/* Tech Stack Pills */}
        <div>
          {project.stack.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>

        {/* Botón Ver sitio */}
        <div className="project-actions">
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-project-live w-100"
            as="a"
          >
            <FiExternalLink size={13} /> Ver sitio en vivo
          </Button>
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
        <Row className="mb-5">
          <Col lg={7}>
            <span className="section-label">Trabajo</span>
            <h2 className="section-title">Proyectos Destacados</h2>
            <p className="section-subtitle">
              Aplicaciones web completas desarrolladas desde el diseño de base de datos
              hasta la interfaz de usuario final.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
