import { Container } from 'react-bootstrap';
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
  SiObsidian,
} from 'react-icons/si';
import {
  FiServer,
  FiLayout,
  FiTool,
  FiDatabase,
  FiCode,
  FiZap,
  FiCloud,
  FiCpu,
  FiEdit3,
  FiRadio,
  FiGrid,
  FiRefreshCw,
} from 'react-icons/fi';

/* ─── Grupos de habilidades ─── */
const backendSkills = [
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <FiZap /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'FastAPI', icon: <SiFastapi /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Prisma', icon: <FiDatabase /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'WebSocket', icon: <FiRadio /> },
  { name: 'Microservicios', icon: <FiGrid /> },
];

const frontendSkills = [
  { name: 'React', icon: <SiReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <FiCode /> },
  { name: 'Vite', icon: <SiVite /> },
];

const cloudSkills = [
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'AWS', icon: <FiCloud /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'VPS', icon: <FiServer /> },
  { name: 'Docker', icon: <SiDocker /> },
];

const toolsSkills = [
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Trello', icon: <SiTrello /> },
  { name: 'Obsidian', icon: <SiObsidian /> },
  { name: 'Stitch', icon: <FiEdit3 /> },
  { name: 'Scrum', icon: <FiRefreshCw /> },
];

/* ─── Sub-componente de grupo ─── */
function BentoCard({ spanClass, iconClass, icon, title, skills }) {
  return (
    <div className={`bento-card ${spanClass}`}>
      <div className="bento-category">
        <div className={`bento-category-icon ${iconClass}`}>{icon}</div>
        <span className="bento-category-title">{title}</span>
      </div>
      <div>
        {skills.map((s) => (
          <span key={s.name} className="skill-tag">
            {s.icon} {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Sección principal ─── */
export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="mb-5">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Stack completo para construir productos web robustos — desde la base de datos
            hasta el deploy en producción.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">

          {/* Backend & DB — 8 cols */}
          <BentoCard
            spanClass="col-span-8"
            iconClass="backend"
            icon={<FiServer />}
            title="Backend & Bases de Datos"
            skills={backendSkills}
          />

          {/* Cloud & Deploy — 4 cols */}
          <BentoCard
            spanClass="col-span-4"
            iconClass="cloud"
            icon={<FiCloud />}
            title="Cloud & Deploy"
            skills={cloudSkills}
          />

          {/* Frontend — 6 cols */}
          <BentoCard
            spanClass="col-span-6"
            iconClass="frontend"
            icon={<FiLayout />}
            title="Frontend"
            skills={frontendSkills}
          />

          {/* Herramientas — 6 cols */}
          <BentoCard
            spanClass="col-span-6"
            iconClass="tools"
            icon={<FiTool />}
            title="Herramientas & Diseño"
            skills={toolsSkills}
          />

        </div>
      </Container>
    </section>
  );
}
