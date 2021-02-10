import React from "react";
import {Link} from "react-scroll";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      <div className="nav-links">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Nav;
