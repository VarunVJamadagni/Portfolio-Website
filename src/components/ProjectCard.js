import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p className="project-description">{description}</p>
          <p><span className="tech-label">Tech Stack:</span><br />{tech}</p>
        </div>
      </div>
    </Col>
  );
};
