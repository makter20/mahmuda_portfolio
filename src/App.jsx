import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import particles from "./particles.json";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particles}
        style={{ zIndex: -1 }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
