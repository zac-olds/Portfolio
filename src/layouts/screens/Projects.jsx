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
        "My first project. A single page website that displays basic brewery info and a brewery map. The user can search a database of breweries in the United States and bring up it up on map with a link to the breweries website (if available). The search feature will allow the user to search for breweries using a zip code, brewery name, or city/state. Built entirely with Javascript, CSS, and HTML",
      liveUrl: "https://zac-olds.github.io/brewQuery/",
      github: "https://github.com/zac-olds/brewQuery",
    },
    {
      image: cigar,
      name: "The Wrapper",
      description:
        "wrapper is a cigar review and tracking app that will allow users to discuss, learn about, and discover new cigars. It allows users to post reviews of cigars, add tasting notes and ratings, revisit past reviews (and update them), and search the database for specific reviews based on cigar name or by author. The app is put together with React.js and uses an Airtable database as the back-end.",
      liveUrl: "https://the-wrapper.netlify.app/",
      github: "https://github.com/zac-olds/wrapper",
    },
    {
      image: pepper,
      name: "Habanero's Market",
      description:
        "A full-stack mock online marketplace app for hot sauce enthusiasts, and built by a team of hot sauce enthusiasts. Once they create and account, users can  create, read, edit, and delete hot sauces on the marketplace, as well as browse the cataloge and view details about each sauce. The front-end is built using React.js, with Express and MongoDB providing the back-end functionality.",
      liveUrl: "https://habaneros-marketplace.netlify.app/",
      github: "https://github.com/zac-olds/habaneros-marketplace",
    },
    {
      image: mineral,
      name: "Mineralopedia",
      description:
        "Mineralopedia is a (soon to be fully searchable) database of common minerals and their properties that will act as a guide to proper identification and as a reference. Users will be able to register an account that will allow them to add minerals to favorites and add, edit, and delete comments. Constructed with React.js on a RESTful API utilizing Ruby on Rails and PostgreSQL.",
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
