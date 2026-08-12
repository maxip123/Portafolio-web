import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi';

/* ─── Datos de proyectos ─── */
const projects = [
  {
    id: '01',
    title: 'Lomas Fight',
    description:
      'Sistema de gestión integral con dashboards analíticos en tiempo real, control de cuotas, seguimiento de socios y reportes de ingresos. Incluye módulo de pagos con historial detallado.',
    stack: ['Node.js', 'Express', 'MySQL', 'Prisma', 'React', 'Chart.js'],
    liveUrl: '#',
    slides: [
      {
        bg: 'linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)',
        label: 'Dashboard',
        accent: '#2563EB',
        emoji: '📊',
      },
      {
        bg: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
        label: 'Gestión de Socios',
        accent: '#4F46E5',
        emoji: '🥋',
      },
      {
        bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        label: 'Control de Pagos',
        accent: '#16A34A',
        emoji: '💳',
      },
    ],
  },
  {
    id: '02',
    title: 'Futsal AFA',
    description:
      'Plataforma de gestión para torneos de fútbol sala. Administración de equipos, fixtures, tabla de posiciones y estadísticas de jugadores con panel de control completo.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
    slides: [
      {
        bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
        label: 'Fixture & Calendario',
        accent: '#059669',
        emoji: '⚽',
      },
      {
        bg: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
        label: 'Tabla de Posiciones',
        accent: '#10B981',
        emoji: '🏆',
      },
      {
        bg: 'linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)',
        label: 'Estadísticas',
        accent: '#047857',
        emoji: '📈',
      },
    ],
  },
  {
    id: '03',
    title: 'Unlimited Fitness',
    description:
      'Sistema de administración para gimnasio: gestión de socios, control de acceso, planes de membresía, seguimiento de asistencia y reportes financieros.',
    stack: ['React', 'Express', 'MySQL', 'Tailwind'],
    liveUrl: '#',
    slides: [
      {
        bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        label: 'Panel Principal',
        accent: '#D97706',
        emoji: '🏋️',
      },
      {
        bg: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
        label: 'Membresías',
        accent: '#EA580C',
        emoji: '🪪',
      },
      {
        bg: 'linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)',
        label: 'Reportes',
        accent: '#CA8A04',
        emoji: '📋',
      },
    ],
  },
];

/* ─── Componente de slide placeholder ─── */
function SlideContent({ slide }) {
  return (
    <div
      style={{
        width: '100%',
        height: '220px',
        background: slide.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <span style={{ fontSize: '2.8rem', lineHeight: 1 }}>{slide.emoji}</span>
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: slide.accent,
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(6px)',
          padding: '4px 12px',
          borderRadius: '100px',
        }}
      >
        {slide.label}
      </span>
    </div>
  );
}

/* ─── Tarjeta de proyecto ─── */
function ProjectCard({ project }) {
  return (
    <Card className="project-card border-0 h-100">
      {/* Carousel de imágenes */}
      <div style={{ overflow: 'hidden', borderRadius: '16px 16px 0 0', position: 'relative' }}>
        <span
          className="project-number"
          style={{ position: 'absolute', top: 12, left: 12, zIndex: 10 }}
        >
          {project.id}
        </span>
        <Carousel
          interval={3500}
          controls={true}
          indicators={true}
          fade={false}
          pause="hover"
          className="project-carousel"
        >
          {project.slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <SlideContent slide={slide} />
            </Carousel.Item>
          ))}
        </Carousel>
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

        {/* Solo botón "Ver sitio" */}
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
