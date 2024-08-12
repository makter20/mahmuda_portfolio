import React from "react";
import aboutImg from "../../assets/About/aboutImage.png";
import learner from "../../assets/About/learnerImg.png";
import hardwork from "../../assets/About/worker.png";
import innovative from "../../assets/About/innovate.png";
import "./About.css";
export default function About() {
  return (
    <section className="aboutContainer" id="about">
      <h1 className="aboutTitle">About</h1>

      <div className="aboutContent">
        <img className="aboutImg" src={aboutImg} alt="about image" />
        <ul className="ulItems">
          <li className="eachItem">
            <img src={learner} alt="keen learner" />
            <div className="itemDescription">
              <h3>Keen learner</h3>
              <p>
                I enjoy learning new things. In the tech world, where things
                change fast, being eager to learn is crucial. Showing that I'm
                keen to learn new skills tells recruiters I'm adaptable. Whether
                it's self-study or joining workshops, I actively seek ways to
                grow. Being a lifelong learner means I'm always prepared to
                tackle new challenges and contribute effectively to projects
              </p>
            </div>
          </li>
          <li className="eachItem">
            <img src={hardwork} alt="keen learner" />
            <div className="itemDescription">
              <h3>Hardworking</h3>
              <p>
                I'm a hard worker. I take each task seriously and work with
                care. I put in the effort to do things well. My commitment to
                doing good work makes me dependable and trustworthy. Recruiters
                value hard workers because they get things done on time and to a
                high standard. My dedication sets me apart and shows I'm ready
                to succeed in any project
              </p>
            </div>
          </li>
          <li className="eachItem">
            <img src={innovative} alt="keen learner" />
            <div className="itemDescription">
              <h3>Innovative</h3>
              <p>
                I enjoy coming up with new ideas. In tech, being creative is
                important. It means finding solutions others might not see.
                Being innovative shows I'm open-minded and willing to try new
                things. I like exploring new technologies and finding unique
                solutions to problems. Recruiters look for innovative thinkers
                because they drive progress and bring fresh perspectives to
                projects. My passion for innovation sets me apart and shows I'm
                ready to make a difference
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
