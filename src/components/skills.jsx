import "./css/skills.css";
import express from "../images/express.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import mongodb from "../images/mongodb.svg";
import nodejs from "../images/nodejs.svg";
import react from "../images/react.svg";
import git from "../images/git.svg";

function Skills() {
  return (
    <div>
      <div id="skillsMainDiv">
        <h1 id="skillsHeading">Skills</h1>

        <div className="techStackToolsDiv">
          <img class="texhStackSvg" src={html} />
          <img class="texhStackSvg" src={css} />
          <img class="texhStackSvg" src={js} />
          <img class="texhStackSvg" src={react}  />
          <img class="texhStackSvg" src={nodejs}  />
          <img class="texhStackSvg" src={git} />
        </div>
        <div id="techStackToolsDiv_2" >
        <img id="expressSvg" className="texhStackSvg_2" src={express} />
        <img id="mongodbSvg" className="texhStackSvg_2" src={mongodb}  />
        </div>
        
      </div>
    </div>
  );
}

export { Skills };
