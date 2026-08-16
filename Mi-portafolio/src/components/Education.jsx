import { Container } from 'react-bootstrap';
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <Container>

        <div className="section-header">
          <span className="section-tag">Formación</span>
          <h2 className="section-title">Estudios</h2>
          <p className="section-subtitle">Mi trayectoria académica</p>
        </div>

        <div className="education-timeline">
          <div className="education-card">
            <div className="education-icon-wrap">
              <FiBook className="education-icon" />
            </div>

            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">Tecnicatura Universitaria en Programación</h3>
                  <p className="education-institution">
                    <FiMapPin size={13} style={{ marginRight: 5 }} />
                    UTN – Facultad Regional Tucumán
                  </p>
                </div>
                <div className="education-badge">
                  <FiCalendar size={13} />
                  <span>2024 – 2026</span>
                </div>
              </div>

              <div className="education-divider" />

              <div className="education-tags">
                <span className="edu-tag">Programación</span>
                <span className="edu-tag">Bases de Datos</span>
                <span className="edu-tag">Desarrollo Web</span>
                <span className="edu-tag">Algoritmos</span>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
