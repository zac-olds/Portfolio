import React from "react";
import {Element} from "react-scroll";

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
            After joining the Navy out of high school, I learned the value of
            working as a team and pushing myself. I applied these principles to
            my life, and strove to become a geologist to sate my curiosity with
            science and the solid earth. Now, I am again reinventing myself and
            following a childhood dream to become a software engineer. I am a
            devoted life long learner who is always looking for the next
            mountain to climb.
            <Button
              id="resume-button"
              variant="outlined"
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
