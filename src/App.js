import React from "react";
import Profile from "./PortfolioContainer/Home/Profile";
import Contact from "./PortfolioContainer/Contact/contact";
import Projects from "./PortfolioContainer/Projects/project";
import About from "./PortfolioContainer/AboutMe/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Profile />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/project" exact element={<Projects />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
