import React from "react";
import "./Profile.css";
import Typical from "react-typical";
import Navbar from "../Navbar/navbar";
import About from "../AboutMe/About";
import Projects from "../Projects/project";
import Contact from '../Contact/contact'
import Footer from '../Footer/Footer'
function Profile() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container-fluid center-block box">
        <div className="content">
        <div className="profile justify-content-center text-center ">
          <span className="container justify-content-center text-center mb-2">
            Hello, I'm <span className="highlighted-text fw-bold ">Vikas</span>
          </span>
        </div>
        <div className="profile-details-role profile mx-auto center-block justify-content-center text-center">
          <span className="primary-text">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Etuestic Developer",
                  3000,
                  "Mern stack Developer💻",
                  3000,
                  "Frontend Developer 👨‍💻",
                  3000,
                  "Software Developer 👨‍💻",
                  3000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
            Coding the future: Transforming ideas into innovative software solutions.
            </span>
          </span>
        </div>
        <div className="profile-option  justify-content-center mx-auto my-4 center-block text-center">
          <button className="btn primary-btn hire mx-2">Hire Me</button>
          <a href="dfdf.cv" download="vikas n.pdf">
            <button className="btn highlighted-btn resume mx-2">Get Resume</button>
          </a>
        </div>
        </div>
      </div>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default Profile;
