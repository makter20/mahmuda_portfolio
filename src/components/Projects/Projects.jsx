import projectData from "../../data/projects.json";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Project from "./Project";

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <div className="portfolio" id="projects">
      <div className="progress">
        <h1 className="title">My Projects</h1>
      </div>
      <div className="projectWrapper" ref={ref}>
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
