import projectData from "../../data/projects.json";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Project from "./Project";

const Projects = () => {
  const ref = useRef(); // Reference for the whole list
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Create a progress bar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="projects">
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="projectWrapper">
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
