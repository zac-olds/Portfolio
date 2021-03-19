import React from "react";

// MATERIAL UI IMPORTS
import {Button} from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

// ASSETS
import profile from "../assets/profile.jpg";
import css3 from "../assets/css3.png";
import html5 from "../assets/html5.png";
import js from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import rails from "../assets/ruby-on-rails.png";
import ruby from "../assets/ruby.png";

// STYLES
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-text" id="about">
          About
        </div>
        <div className="info-box">
          <img className="profile-photo" alt="profile" src={profile} />
          <div className="brand-statement">
            I learned the value of working as part of a team and pushing myself
            to achieve my goals while in the Navy. I strove to apply the
            principles of Honor, Courage, and Commitment to my personal and
            professional life. My passion for science and exploration has led me
            along the path from geologist a geologist to software engineer. Now,
            I am and following a childhood dream to become a software engineer.
            I am a devoted life long learner who is always excited for the next
            mountain to climb.
            <Button
              id="resume-button"
              variant="outlined"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1oCuNIvHKsEUB962nO-MmIiCCNdK7eIo1/view?usp=sharing"
              endIcon={<PictureAsPdfIcon />}
            >
              See My Resume
            </Button>
          </div>
        </div>
        <h2 className="tech-header">Technologies: </h2>
        <div className="language-box">
          <img id="css3-logo" alt="css3-logo" src={css3} />
          <img id="html5-logo" alt="html5-logo" src={html5} />
          <img id="javascript-logo" alt="javascript-logo" src={js} />
          <img id="nodejs-logo" alt="nodejs-logo" src={nodejs} />
          <img id="react-logo" alt="react-logo" src={react} />
          <img id="rails-logo" alt="rails-logo" src={rails} />
          <img id="ruby-logo" alt="ruby-logo" src={ruby} />
        </div>
      </div>
    </>
  );
};

export default About;
