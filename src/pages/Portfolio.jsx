import React from "react";
import Project from '../components/Project';


// import Project1 from "../assets/images/project1.png";
function Portfolio() {
  const projects = [
    { title: 'Project 1', img: 'proj1.jpg', deployed: '#', repo: '#' },
  ];
    return (
        <div>
        <h2>Potfolio</h2>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
        {/* <p>
          This is my portfolio.
        </p> */}
      </div>
        );
    }


export default Portfolio;
  