import React from "react";
import Image1 from "./img/image1.jpg";
import Image2 from "./img/image2.png";
import Image3 from "./img/image3.png";
import Image4 from "./img/image4.png";
import Image5 from "./img/image5.png";
import { Link } from "react-router-dom";
import "./project.css";

function Projects() {
  return (
    <React.Fragment>
      <div className="container-fluid justify-content-center">
        <h1 className="text-center pt-5">Projects</h1>
        <p className="text-center">
          Where creativity meets functionality, each project tells a unique
          story in the tapestry of my portfolio.
        </p>
        <hr className="red-line w my-3" />
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card h-100">
              <img src={Image1} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text">
                  Responsive portfolio website featuring my skills in React.js,
                  Bootstrap, CSS, and showcasing projects.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card h-100">
              <img src={Image2} className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Web</h5>
                <p className="card-text">
                  Elegant restaurant site using HTML, CSS, React, Bootstrap for
                  seamless browsing, showcasing cuisine and ambiance.
                </p>
                <Link
                  to="https://restaurantwebpagee.netlify.app/"
                  className="btn btn-primary"
                >
                  Go to Live Preview
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card h-100">
              <img src={Image4} className="card-img-top" alt="Project 4" />
              <div className="card-body">
                <h5 className="card-title">Travel WebApp</h5>
                <p className="card-text">
                  MERN-based Travel WebApp: Enables booking, contact, and
                  real-time news updates, enhancing user experience and
                  functionality.
                </p>
                <Link
                  to="https://github.com/CodeVikas/travel_web_app"
                  className="btn btn-primary"
                >
                  {" "}
                  View code
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card h-100">
              <img src={Image3} className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Admin UI</h5>
                <p className="card-text">
                  Custom CSS/HTML design for intuitive, efficient management
                  interface, enhancing user experience and functionality.
                </p>
                <Link
                  to="https://codevikas.github.io/admin/home.html"
                  className="btn btn-primary"
                >
                  {" "}
                  Go to Live Preview
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col">
            <div className="card h-100">
              <img src={Image5} className="card-img-top" alt="Project 5" />
              <div className="card-body">
                <h5 className="card-title">Blogger (CRUD)</h5>
                <p className="card-text">
                  MERN Blogger: Easy-to-use CRUD interface for creating,
                  reading, updating, and deleting blog posts, ensuring seamless
                  user experience.
                </p>
                <Link
                  to="https://github.com/CodeVikas/blogger"
                  className="btn btn-primary"
                >
                  {" "}
                  View code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
