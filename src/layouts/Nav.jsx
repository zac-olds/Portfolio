import React from "react";
import {Link} from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <div className="logo"></div>
        <h1>Zac Olds</h1>
      </div>
      <div className="nav-links">
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/fun">FUN</Link>
      </div>
    </div>
  );
};

export default Nav;
