
import "./css/intro.css"
import ashokImage from "../images/ashok.png"

function Intro(){
    return (
        <div>
            
            <div id="introMainDiv">
                <div className="introLeftDiv">
                    <div id="introLeftInfoDiv">
                     <h3 id="introLeftHello">Hello, My name is </h3>
                     <h1 id="introLeftName">Ashokvardhana Reddy</h1>
                    </div>
                    <div id="introLeftWebDiv">
                    <div id="introLeftWebNameDiv">
                    <div id="introLeftWebTitle">Full Stack Web Developer</div>
                    </div>
                    </div>
                    <div id="resumeDiv">
                    <button id="resumeButton"><a id="resumeAnchorTag" href="https://drive.google.com/file/d/1zwnDoN0vBtO_paDnLd-_TfMDxWfot_eD/view?usp=sharing" target="_blank">Resume</a></button>
                    </div>

                   

                </div>
                <div className="introRightDiv">
                {/* <div id="imageBackground"></div> */}
                <img id="ashokImage" src={ashokImage}></img>
                </div>
            </div>
            

        </div>
    )
}

export {Intro}