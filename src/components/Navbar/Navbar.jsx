import React, { useState } from "react";
import "./Navbar.css";
import menu from "../../assets/nav/hamMenu.png";
import close from "../../assets/nav/close.png";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="menu">
        <img
          className="menuBtn"
          src={isOpen ? close : menu}
          alt="menu-button"
          onClick={() => setOpen(!isOpen)}
        />
        <ul
          className={`menuitems ${isOpen && "menuOpen"}`}
          onClick={() => {
            setOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/resume.pdf">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
