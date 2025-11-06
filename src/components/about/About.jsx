import { LINK_TO_RESUME } from "../../utils/constants";
import "./about.scss";

export default function About() {
  return (
    <>
      <div className="page__about">
        <h1 className="page__about-title">
          <span className="page__about-title--primary">SOFTWARE </span>
          <span className="page__about-title--secondary">ENGINEER</span>
        </h1>
        <p className="page__about-desc">
          I am a passionate Frontend Engineer with over 8 years of experience building scalable, high-performance web applications.
          I specialize in modern front-end architecture, including micro-frontends, reusable component libraries, and UI performance optimization.
          I focus on building clean, efficient, and user-centric interfaces that scale seamlessly across projects and teams.
        </p>
        <div className="page__about-highlights">
          <p className="page__about-highlight">
            <span className="page__about-highlight-value">+8</span>
            <br />
            Years of Experience
          </p>
          <p className="page__about-highlight">
            <span className="page__about-highlight-value">+10</span>
            <br />
            Projects Completed
          </p>
          <p className="page__about-highlight">
            <span className="page__about-highlight-value">+70k</span>
            <br />
            Lines of code written
          </p>
          <p className="page__about-highlight">
            <span className="page__about-highlight-value">+2</span>
            <br />
            BFF Layers developed
          </p>
        </div>
        <div className="page__about-resume">
          {/* <p>Download my resume, here:</p> */}
          <br />
          <a href={LINK_TO_RESUME} target="_blank">
            <button className="resume">
                Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
