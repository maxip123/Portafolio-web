import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FiSend, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder – integrar con EmailJS o backend propio
    console.log('Form submitted:', form);
    alert('¡Mensaje enviado! Me pondré en contacto a la brevedad.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="contact-card">
          <Row className="gy-5">

            {/* Left */}
            <Col lg={5} className="d-flex flex-column justify-content-between">
              <div>
                <span className="section-label">Contacto</span>
                <h2 className="section-title">¿Trabajamos Juntos?</h2>
                <p className="section-subtitle mb-4">
                  Estoy disponible para proyectos freelance, colaboraciones y
                  oportunidades laborales. No dudes en escribirme.
                </p>

                <div className="d-flex flex-column gap-3">
                  <a
                    href="mailto:juanm@email.com"
                    className="footer-link ps-0"
                  >
                    <FiMail /> juanm@email.com
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link ps-0"
                  >
                    <FiGithub /> github.com/juanm
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link ps-0"
                  >
                    <FiLinkedin /> linkedin.com/in/juanm
                  </a>
                </div>
              </div>
            </Col>

            {/* Divider vertical (lg+) */}
            <Col lg={1} className="d-none d-lg-flex justify-content-center">
              <div style={{ width: 1, background: 'var(--border)', height: '100%' }} />
            </Col>

            {/* Form */}
            <Col lg={6}>
              <Form onSubmit={handleSubmit} id="contact-form">
                <Row className="g-3">
                  <Col sm={6}>
                    <Form.Label className="form-label-custom" htmlFor="contact-name">
                      Nombre
                    </Form.Label>
                    <Form.Control
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      className="form-control-custom"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Label className="form-label-custom" htmlFor="contact-email">
                      Email
                    </Form.Label>
                    <Form.Control
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="form-control-custom"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label className="form-label-custom" htmlFor="contact-message">
                      Mensaje
                    </Form.Label>
                    <Form.Control
                      id="contact-message"
                      name="message"
                      as="textarea"
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="form-control-custom"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" className="btn-send">
                      <FiSend /> Enviar Mensaje
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
