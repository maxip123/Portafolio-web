import { Container, Row, Col } from 'react-bootstrap';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-bar">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <span className="footer-text">
              © {year} Juan M. Dev — Fullstack Developer Portfolio
            </span>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-md-end gap-1">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
