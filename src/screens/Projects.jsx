// DEPENDENCIES
import React from "react";

// MATERIAL UI IMPORTS
import {Button} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

// ASSETS
import beer from "../assets/beer.jpg";
import pepper from "../assets/pepper.jpg";
import cigar from "../assets/cigar.jpg";
import mineral from "../assets/mineral.jpg";

// STYLES
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      image: beer,
      name: "brewQuery",
      description:
        "My first project. A simple website that will display basic brewery info, and a map. The user can search a database of breweries in the United States and bring up a map and a link to the breweries website (if available). The search feature will allow the user to search breweries using a zip code, brewery name, or city/state.",
      liveUrl: "https://zac-olds.github.io/brewQuery/",
      github: "https://github.com/zac-olds/brewQuery",
    },
    {
      image: cigar,
      name: "The Wrapper",
      description:
        "wrapper is an airtable and React base app that will allow users to discuss, learn about, and discover new cigars. It will allow users to post reviews of cigars, add tasting notes, revisit past reviews (and update them), and search the database for specific reviews based on cigar name or by author.",
      liveUrl: "https://the-wrapper.netlify.app/",
      github: "https://github.com/zac-olds/wrapper",
    },
    {
      image: pepper,
      name: "Habanero's Market",
      description:
        "A full stack online marketplace app for hot sauce enthusiasts. Users can create a unique user account that will allow them to create, read, edit, and delete items on the marketplace.",
      liveUrl: "https://habaneros-marketplace.netlify.app/",
      github: "https://github.com/zac-olds/habaneros-marketplace",
    },
    {
      image: mineral,
      name: "Mineralopedia",
      description:
        "Mineralopedia is a (soon to be fully searchable) database of common minerals and their properties that will act as a guide to proper identification and as a reference. Users will be able to register an account that will allow them to add minerals to favorites and add, edit, and delete comments.",
      liveUrl: "https://mineralopedia.netlify.app/minerals",
      github: "https://github.com/zac-olds/Mineralopedia",
    },
  ];

  return (
    <>
      <div className="projects-container">
        <div className="projects-text" id="projects">
          Projects
        </div>
        <div className="projects">
          {projects.map((project, index) => {
            return (
              <div className="project-container" key={index}>
                <img
                  className="project-image"
                  alt="profile"
                  src={project.image}
                />
                <h3 className="project-name">{project.name}</h3>
                <div className="project-description">{project.description}</div>
                <div className="project-buttons">
                  <Button
                    variant="outlined"
                    href={project.liveUrl}
                    endIcon={<WebIcon />}
                  >
                    Live Site
                  </Button>
                  <Button
                    variant="outlined"
                    href={project.github}
                    endIcon={<GitHubIcon />}
                  >
                    Github
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
