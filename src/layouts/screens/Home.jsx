// DEPENDENCIES
import React from "react";
import {baseUrl, key} from "../../services/apiConfig";
import {useState, useEffect} from "react";
import axios from "axios";

// MATERIAL UI IMPORTS
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// STYLES
import "../../styles/Home.css";

const Home = () => {
  // APOD API CALL CODE
  const imageUrl = `${baseUrl}?api_key=${key}`;
  const [backgroundURL, setBackgroundURL] = useState("");

  useEffect(() => {
    const getHero = async () => {
      const resp = await axios.get(imageUrl);
      console.log(resp.data);
      setBackgroundURL(resp.data.url);
    };
    getHero();
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundURL})`,
      }}
    >
      <div className="home-text">
        <h1>Zac Olds</h1>
        <h3>Software Engineer | Explorer | Geologist</h3>
        <div>
          <a href="https://www.linkedin.com/in/zachary-olds/">
            <IconButton name="linkedin">
              <LinkedInIcon className="icon-button" fontSize="medium" />
            </IconButton>
          </a>
          <a href="https://github.com/zac-olds">
            <IconButton name="github">
              <GitHubIcon className="icon-button" fontSize="small" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
