import React from "react";
import { ReactTyped } from "react-typed";
import heroImg from "../../assets/Hero/heroImage.png";
import "./Hero.css";
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
          I am a new grad full stack developer. I am looking for a full time
          position.
        </p>
        <a className="contactBtn" href="mailto:mahmudasaba@gmail.com">
          Contact Me
        </a>
      </div>
      <img className="heroImg" src={heroImg} alt="Hero image" />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
}
