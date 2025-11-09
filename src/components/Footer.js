import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">

              {/* ✅ GitHub */}
              <a 
                href="https://github.com/VarunVJamadagni" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="devicon-github-original"></i>
              </a>

              {/* ✅ LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/varunvjamadagni/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="devicon-linkedin-plain"></i>
              </a>

            </div>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}
