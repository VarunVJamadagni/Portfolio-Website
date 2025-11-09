import Marquee from "react-fast-marquee";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Skilled in Java, JavaScript, Node.js, SQL, HTML/CSS, and MongoDB. Focused on writing clean and maintainable code, building responsive UI and strong backend systems.
              </p>

              {/* ✅ Smooth Continuous Scroll */}
              <Marquee pauseOnHover={true} speed={55} gradient={false}>
                
                <div className="item mx-5 text-center">
                  <i className="devicon-java-plain colored" style={{ fontSize: "80px" }}></i>
                  <h5>Java</h5>
                </div>

                <div className="item mx-5 text-center">
                  <i className="devicon-javascript-plain colored" style={{ fontSize: "80px" }}></i>
                  <h5>JavaScript</h5>
                </div>

                <div className="item mx-5 text-center">
                  <i className="devicon-nodejs-plain colored" style={{ fontSize: "80px" }}></i>
                  <h5>Node.js</h5>
                </div>

                <div className="item mx-5 text-center">
                  <i className="devicon-mongodb-plain colored" style={{ fontSize: "80px" }}></i>
                  <h5>MongoDB</h5>
                </div>

                <div className="item mx-5 text-center">
                  <i className="devicon-mysql-plain colored" style={{ fontSize: "80px" }}></i>
                  <h5>SQL</h5>
                </div>

                <div className="item mx-5 text-center">
                  <i className="devicon-html5-plain colored" style={{ fontSize: "80px" }}></i>
                  <h5>HTML</h5>
                </div>

                <div className="item mx-5 text-center">
                  <i className="devicon-css3-plain colored" style={{ fontSize: "80px" }}></i>
                  <h5>CSS</h5>
                </div>

              </Marquee>

            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
