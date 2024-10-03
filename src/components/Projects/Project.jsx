import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Projects.css";

const Project = ({ project }) => {
  const ref = useRef(); // For tracking scroll position

  // framer-motion's useScroll and useTransform to animate on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref} className="projectSection">
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" style={{ x }}>
            <img src={project.image} alt={project.title} />
          </motion.div>
          <motion.div className="textContainer" style={{ x }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View on GitHub</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
