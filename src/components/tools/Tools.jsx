import "./tools.scss";
import Expressjs from "../../assets/icons/skills/expressjs.svg";
import Figma from "../../assets/icons/skills/figma.svg";
import Jenkins from "../../assets/icons/skills/jenkins.svg";
import Nodejs from "../../assets/icons/skills/nodejs.svg";
import React from "../../assets/icons/skills/react.svg";
import Javascript from "../../assets/icons/skills/javascript.svg";
import Git from "../../assets/icons/skills/git.svg";
import Webpack from "../../assets/icons/skills/webpack.svg";
import Jest from "../../assets/icons/skills/jest.svg";
import Storybook from "../../assets/icons/skills/storybook.svg";
import Typescript from "../../assets/icons/skills/typescript.svg";
import HTML from "../../assets/icons/skills/html.svg";
import Vuejs from "../../assets/icons/skills/vuejs.svg";
import Nextjs from "../../assets/icons/skills/nextjs.svg";
import Vscode from "../../assets/icons/skills/vscode.svg";
import Postman from "../../assets/icons/skills/postman.svg";
import Vercel from "../../assets/icons/skills/vercel.svg";
import { trackEvent } from "../../utils/analytics"
import { analyticsLocations } from "../../utils/constants"

const skillsList = [
  { id: "s1", name: "React", imgSrc: React, desc: "UI library", url: "https://reactjs.org" },
  { id: "s2", name: "Vue.js", imgSrc: Vuejs, desc: "Progressive UI framework", url: "https://vuejs.org" },
  { id: "s3", name: "Next.js", imgSrc: Nextjs, desc: "React framework", url: "https://nextjs.org" },
  { id: "s4", name: "Express.js", imgSrc: Expressjs, desc: "Nodejs based web framework", url: "https://expressjs.com" },
  { id: "s5", name: "Node.js", imgSrc: Nodejs, desc: "JavaScript runtime", url: "https://nodejs.org" },
  { id: "s6", name: "JavaScript", imgSrc: Javascript, desc: "Language", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: "s7", name: "HTML", imgSrc: HTML, desc: "Markup language", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: "s8", name: "TypeScript", imgSrc: Typescript, desc: "Typed JS superset", url: "https://www.typescriptlang.org" },
  { id: "s9", name: "Jest", imgSrc: Jest, desc: "Testing framework", url: "https://jestjs.io" },
  { id: "s10", name: "Git", imgSrc: Git, desc: "Version control", url: "https://git-scm.com" },
  { id: "s11", name: "Webpack", imgSrc: Webpack, desc: "Module bundler", url: "https://webpack.js.org" },
  { id: "s12", name: "Storybook", imgSrc: Storybook, desc: "Component dev environment", url: "https://storybook.js.org" },
  { id: "s13", name: "Jenkins", imgSrc: Jenkins, desc: "CI/CD automation", url: "https://www.jenkins.io" },
  { id: "s14", name: "Figma", imgSrc: Figma, desc: "Design & prototyping", url: "https://www.figma.com" },
  { id: "s15", name: "Visual Studio Code", imgSrc: Vscode, desc: "Editor Tool", url: "https://code.visualstudio.com/" },
  { id: "s16", name: "Postman", imgSrc: Postman, desc: "API Dev Tool", url: "https://www.postman.com/" },
  { id: "s17", name: "Vercel", imgSrc: Vercel, desc: "Build and Deployment Tool", url: "https://www.vercel.com/" },
];

const skillsListEl = skillsList.map((skill) => {
  return (
    <a
      key={skill.id}
      className="skill"
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      title={skill.desc}
      onClick={() => trackEvent(`click_hyperlink_${skill.name.toLowerCase().split(" ").join("-")}`, {
        location: analyticsLocations.tools
      })}
    >
      <img src={skill.imgSrc} alt={skill.desc} className="tool-img" />
	  <div className="tool__info">
      <h3 className="tool-name">{skill.name}</h3>
      <p className="tool-desc">{skill.desc}</p>
	  </div>
    </a>
  );
});

export default function Skills() {
  return (
    <>
      <div className="page__skills">
        <h3 className="page__about-title">
          <span className="page__about-title--secondary">TOOLS</span>
        </h3>
        <div className="skills__list">{skillsListEl}</div>
      </div>
    </>
  );
}