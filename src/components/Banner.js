import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';

export const Banner = () => {
  const toRotate = [
    "Full Stack Developer",
    "ML Enthusiast",
    "Java & Node.js Developer"
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      // When typing finishes
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
      } 
      // When deleting finishes
      else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

    }, isDeleting ? 80 : 140); // typing speed

    return () => clearTimeout(timer);

  }, [text, isDeleting, loopNum, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>Hi! I'm Varun V Jamadagni</h1>

              <h2 className="role-text">
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h2>

              <p>
                I'm a passionate developer focused on building modern web applications 
                with clean UI and efficient backend logic. Currently exploring Cloud, 
                AI/ML & system design to become industry ready.
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <div className="floating-image">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
