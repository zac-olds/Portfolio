// DEPENDENCIES
import React from "react";

// MATERIAL UI IMPORTS
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// STYLES
import "../styles/Home.css";

const Home = () => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   window.open(this.makeHref("route"));
  // };
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Zac Olds</h1>
        <h3>Software Engineer | Explorer | Geologist</h3>
        <div>
          <a href="https://www.linkedin.com/in/zachary-olds/">
            <IconButton name="linkedin">
              <LinkedInIcon className="icon-button" fontSize="large" />
            </IconButton>
          </a>
          <a href="https://github.com/zac-olds">
            <IconButton name="github">
              <GitHubIcon className="icon-button" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
