import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mealImg from "../assets/img/meal-mates.png";
import tttImg from "../assets/img/tictactoe_real.png";
import stockImg from "../assets/img/stock_real.png";
import ecommerceImg from "../assets/img/ecommerce.png";
import alertmateImg from "../assets/img/alert_mate_1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

 const projects = [
  {
    title: "MealMates - Food Ordering Platform",
    description: "A food ordering platform allowing users to browse restaurants and place orders.",
    tech: "React, Node.js, Express, MongoDB",
    imgUrl: mealImg,
  },
  {
    title: "TicTacToe Game",
    description: "A classic two-player tic-tac-toe game with clean UI and logic.",
    tech: "JavaScript, HTML, CSS",
    imgUrl: tttImg,
  },
  {
    title: "Stock Price Prediction",
    description: "Predicting stock prices using regression-based ML models.",
    tech: "Python, Scikit-learn, Pandas, Matplotlib",
    imgUrl: stockImg,
  },
  {
    title: "E-Commerce REST API",
    description: "Secure backend API supporting authentication, carts, and orders.",
    tech: "Node.js, Express.js, MongoDB, JWT Auth",
    imgUrl: ecommerceImg,
  },
  {
    title: "AlertMate - Smart IoT Safety Device",
    description: "A wearable safety device with SOS alerts, GPS tracking, and fall detection.",
    tech: "ESP32, GPS, GSM Module, Firebase, Flutter App",
    imgUrl: alertmateImg,
  },
];




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                  A curated selection of my development projects ranging from web applications and APIs to IoT and machine learning solutions. Each project reflects hands-on experience and continuous learning.
                </p>

                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
