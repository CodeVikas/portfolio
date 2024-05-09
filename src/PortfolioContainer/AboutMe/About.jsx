import React, { useState } from "react";
import "./about.css";

function About() {
  const [activeSection, setActiveSection] = useState("work-history"); // Initial active section

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <div className="container-fluid justify-content-center">
        <h1 className="text-center pt-5">About Me</h1>
        <p className="text-center">Why Choose us?</p>
        <hr className="red-line w my-3" />
      </div>
      <div className="container about">
        <p className="text-center">
          Passionate MERN stack developer with a knack for crafting robust,
          user-centric applications. Equipped with expertise in MongoDB,
          Express.js, React, and Node.js, I thrive on transforming ideas into
          seamless digital experiences.
        </p>
      </div>
      <div className="container info shadow-lg  my-5  bg-body-secondary rounded">
        <div className="row">
          <div className="col-auto sidebar text-center">
            {" "}
            {/* Added text-center class here */}
            <ul className="list-group">
              <li
                className={`list-group-item ${
                  activeSection === "work-history" ? "active" : ""
                }`}
                onClick={() => handleClick("work-history")}
              >
                Work History
              </li>
              <li
                className={`list-group-item ${
                  activeSection === "education" ? "active" : ""
                }`}
                onClick={() => handleClick("education")}
              >
                Education
              </li>
              <li
                className={`list-group-item ${
                  activeSection === "skills" ? "active" : ""
                }`}
                onClick={() => handleClick("skills")}
              >
                Skills
              </li>
            </ul>
          </div>
          <div className="col content">
            <div
              className={`collapse ${
                activeSection === "work-history" ? "show" : ""
              }`}
              id="work-history"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">ARD Softech Pvt. Ltd</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Mern Stack Intern
                  </h6>
                  <p className="card-text">Nov 2023– Ongoing</p>
                  <p className="card-text">Nagpur, Maharashtra</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    Collaborated with team on building features for Single Page Applications
                    </li>
                    <li className="list-group-item">
                      Created Sliders and Auth pages in industrial project.
                    </li>
                    <li className="list-group-item">
                      Tech Stack: HTML/CSS, JavaScript, React.js,
                      Node.js(Express.js), MYSQL, MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`collapse ${
                activeSection === "education" ? "show" : ""
              }`}
              id="education"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    J D College of Engineering and Management, Nagpur
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Bachelor of Technology in Information Technology
                  </h6>
                  <p className="card-text"> 2019– 2023</p>
                  <p className="card-text">CGPA– 8.64</p>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">
                    New English Junior College, Nagpur
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Senior Secondary (Class-XII)
                  </h6>
                  <p className="card-text">2018– 2019</p>
                  <p className="card-text">Percentage– 69.69</p>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">
                    Vidya Vijay Madhyamik Vidyalaya, Nagpur
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Secondary (Class-X)
                  </h6>
                  <p className="card-text"> 2016– 2017</p>
                  <p className="card-text">Percentage– 83.60</p>
                </div>
              </div>
            </div>
            <div
              className={`collapse ${activeSection === "skills" ? "show" : ""}`}
              id="skills"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Skills</h5>
                  <p className="card-text">
                    C, C++, HTML/CSS, Bootstrap,  JavaScript, React.js, Node.js(Express.js),
                    MYSQL, MongoDB, Redux (Basic)
                  </p>
                  <h5 className="card-title mt-3">Developer Tools</h5>
                  <p className="card-text">VS Code, Google Cloud Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
