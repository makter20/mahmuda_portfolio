import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Projects.css";
import importAll from "../../utils";
const images = importAll(
  require.context("../../assets/Projects", false, /\.(png|jpe?g|svg)$/)
);

const Project = ({ project }) => {
  const ref = useRef(); // For tracking scroll position

  // framer-motion's useScroll and useTransform to animate on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="wrapper">
      <motion.div className="imageContainer" style={{ x }}>
        <img src={images[project.image]} alt={project.title} />
      </motion.div>
      <motion.div className="projectTextContainer" style={{ x }}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <button>View on GitHub</button>
        </a>
      </motion.div>
    </section>
  );
};

export default Project;
