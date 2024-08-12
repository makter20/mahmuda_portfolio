import React from "react";
import skill_img from "../../assets/Skill/skill-img1.png";
import "./Skills.css";
import skill from "../../data/skills.json";
import importAll from "../../utils";
const images = importAll(
  require.context("../../assets/Skill", false, /\.(png|jpe?g|svg)$/)
);

export default function Skills() {
  return (
    <section className="skillContainer" id="skills">
      <h2 className="skillTitle">Skills</h2>
      <div className="contentContainer">
        <div className="categories">
          {skill.map((category, id) => (
            <div className="category" key={id}>
              <h3 className="categoryTitle">{category.title}</h3>
              <ul className="skillsList">
                {category.items.map((item, idx) => (
                  <li className="skillItem" key={idx}>
                    <img
                      src={images[item.image]}
                      alt={item.name}
                      className="skillImage"
                    />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="cartoonContainer">
          <img src={skill_img} alt="Cartoon" className="cartoonImage" />
        </div>
      </div>
    </section>
  );
}
