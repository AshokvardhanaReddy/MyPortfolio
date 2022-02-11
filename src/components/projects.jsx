import "./css/projects.css";
import projectImage_1 from "../images/project1.png";
import projectImage_2 from "../images/project2.jpg";

function Projects() {
  return (
    <div>
      <div id="projectsMainDiv">
        <h1 id="projectMainHeading">Projects</h1>

        <div className="projectsDiv">
          <div id="projectImgDiv">
            <img
              id="projectImg_1"
              class="projectImg"
              src={projectImage_1}
            ></img>
          </div>

          <div id="projectDetailsDiv">
            <h2 class="projectsHeading">Juicy Chemistry Clone</h2>
            <p class="projectDescription">
              Juicy Chemistry which makes 100% organic skin care products. In
              this Project, we clone the website and implemented some features
              like Filter by product category Sort based on price User login
              Authentication by using HTML, CSS, JavaScript in 7 Days.
            </p>
            <div className="toolsUsedDiv">
              <p className="toolsUsed">HTML</p>
              <p className="toolsUsed">CSS</p>
              <p className="toolsUsed">JavaScript</p>
            </div>
            <button class="viewProjectButton">
              <a
                class="viewProjectAnchor"
                href="https://github.com/JKAD02/Juicy-Chemistry"
                target="_blank"
              >
                {" "}
                GitHub Project Link{" "}
              </a>
            </button>
          </div>
        </div>

        {/* Second Project */}

        <div className="projectsDiv">
          <div id="projectImgDiv">
            <img
              id="projectImg_1"
              class="projectImg"
              src={projectImage_2}
            ></img>
          </div>

          <div id="projectDetailsDiv">
            <h2 class="projectsHeading">Bodywise Clone</h2>
            <p class="projectDescription">
              Bodywise which provides different types of health care products.
              In this Project, we clone the website and implemented some
              features like Filter by product category, Responsive website in
              mobiles, tablets etc., login Authentication by using HTML, CSS,
              JavaScript in 7 Days.
            </p>
            <div className="toolsUsedDiv">
              <p className="toolsUsed">HTML</p>
              <p className="toolsUsed">CSS</p>
              <p className="toolsUsed">JavaScript</p>
              <p className="toolsUsed">MongoDB</p>
            </div>
            <button class="viewProjectButton">
              <a
                class="viewProjectAnchor"
                href="https://github.com/dinoweblog/FW13-T48-BebodywiseClone-Project"
                target="_blank"
              >
                {" "}
                GitHub Project Link{" "}
              </a>
            </button>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export { Projects };
