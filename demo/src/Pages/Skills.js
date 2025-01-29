import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skills-row">
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wl2XZnNL5oTS_TSbsCiP_31dYtApXMMrXg&s" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeB0Kf8bAgxekAzMETw0PwdbibAGCa2FrfDQ&s" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5G8eECOD1PyiahPpMfAccK5bsb-iT5ozbw&s" alt="JavaScript" />
            <p>React</p>
          </div>
        </div>
        <div className="skills-row">
          <div className="skill-item">
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="React" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img src="c-logo.png" alt="Node.js" />
            <p>C++</p>
          </div>
          <div className="skill-item">
            <img src="https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ" alt="Git" />
            <p>DSA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;