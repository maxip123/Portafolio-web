import { Container, Row, Col } from 'react-bootstrap';
import {
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiGithub,
  SiDocker,
  SiVite,
  SiPython,
  SiFastapi,
  SiTrello,
  SiFigma,
  SiVercel,
  SiSupabase,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';
import {
  FiServer,
  FiLayout,
  FiTool,
  FiDatabase,
  FiZap,
  FiCloud,
  FiRadio,
  FiGrid,
  FiRefreshCw,
} from 'react-icons/fi';

/* ─── Grupos de habilidades ─── */
const skillGroups = [
  {
    category: 'Backend & APIs',
    desc: 'Desarrollo de servicios robustos, lógica de negocio y comunicación en tiempo real.',
    icon: <FiServer />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <FiZap /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'WebSocket', icon: <FiRadio /> },
      { name: 'Microservicios', icon: <FiGrid /> },
    ],
  },
  {
    category: 'Bases de Datos & Persistencia',
    desc: 'Diseño relacional, consultas optimizadas, ORM y gestión de esquemas.',
    icon: <FiDatabase />,
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Prisma ORM', icon: <FiDatabase /> },
      { name: 'Supabase', icon: <SiSupabase /> },
    ],
  },
  {
    category: 'Frontend & Interfaces',
    desc: 'Aplicaciones de una sola página, renderizado reactivo y diseño responsivo.',
    icon: <FiLayout />,
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML5 / CSS3', icon: <SiHtml5 /> },
    ],
  },
  {
    category: 'Infraestructura & Herramientas',
    desc: 'Control de versiones, contenedores, automatización y despliegue continuo.',
    icon: <FiTool />,
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VPS / Linux', icon: <FiCloud /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Trello', icon: <SiTrello /> },
      { name: 'Scrum / Ágil', icon: <FiRefreshCw /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-header-clean mb-5">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Conjunto de tecnologías y herramientas aplicadas en entornos de desarrollo reales
            y proyectos en producción.
          </p>
        </div>

        <Row className="g-4">
          {skillGroups.map((group, idx) => (
            <Col key={idx} md={6} lg={6}>
              <div className="skill-group-panel h-100">
                <div className="skill-group-head">
                  <div className="skill-group-icon">{group.icon}</div>
                  <div>
                    <h3 className="skill-group-name">{group.category}</h3>
                    <p className="skill-group-desc">{group.desc}</p>
                  </div>
                </div>

                <div className="skill-chips-wrap">
                  {group.skills.map((s) => (
                    <div key={s.name} className="skill-chip">
                      <span className="skill-chip-icon">{s.icon}</span>
                      <span className="skill-chip-name">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
