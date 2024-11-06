import React from "react";
import { ReactTyped } from "react-typed";
import profilePic from "../../assets/Hero/heroImage1.png";
import "./Hero.css";
import github from "../../assets/SocialIcon/github.png";
import linkedin from "../../assets/SocialIcon/linkedin.png";
export default function Hero() {
  const titleList = ["Mahmuda", "Keen Learner", "Hardworking"];
  return (
    <section className="container">
      <div className="content">
        <h1 className="herotitle">
          Hello World!
          <br /> I am{" "}
          <ReactTyped
            strings={titleList}
            typeSpeed={80}
            backSpeed={90}
            underline
            cursorChar="_"
            loop
          />
        </h1>
        <p className="description">
          I'm a full-stack developer excited to bring my skills to a full-time
          role. Ready to create and contribute to meaningful projects.
        </p>
        <div className="social">
          <a
            href="https://github.com/makter20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-icon" src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmuda-akter-software-developer/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-icon" src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <img className="heroImg" src={profilePic} alt="Hero image" />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
}
