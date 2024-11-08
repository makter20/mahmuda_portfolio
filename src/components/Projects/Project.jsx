import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Projects.css";
import importAll from "../../utils";
const images = importAll(
  require.context("../../assets/Projects", false, /\.(png|jpe?g|svg)$/)
);

const Project = ({ project }) => {
  const ref = useRef(); // For tracking scroll position

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Adjust x transformation based on screen size
  const x = useTransform(
    scrollYProgress,
    [0, isLargeScreen ? 0.3 : 0.5],
    [-300, 0]
  );

  return (
    <section ref={ref} className="wrapper">
      <motion.div
        className="imageContainer"
        style={{ x }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={images[project.image]} alt={project.title} />
      </motion.div>
      <motion.div
        className="projectTextContainer"
        style={{ x }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
