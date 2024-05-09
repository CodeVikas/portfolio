import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

function navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-custom-color">
      <div class="container-fluid ">
        <Link class="navbar-brand fw-bold ms-5" to="#">
          Portfolio
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
          <ul class="navbar-nav">
            
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About Me
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/project">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
