import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>Hi, I’m Siva Vishaak AK, a second-year Artificial Intelligence and Machine Learning student at Sri Eshwar College of Engineering. I’m passionate about exploring the potential of AI and machine learning to solve real-world challenges, especially in FinTech.

One of my notable projects involves cryptocurrency prediction, where I used machine learning algorithms to analyze historical data and market trends. This project was designed to provide traders and investors with valuable insights for making informed decisions in a volatile market.

</p>
        <p>I’ve also built a strong foundation in programming, with skills in Python, C++, and JavaScript, and I’m certified in web development and responsive design. Tools like VSCode, Canva, and GitHub are part of my daily workflow, and I enjoy collaborating with others to bring creative solutions to life.

My ultimate goal is to contribute to innovative projects that drive technological progress and positively impact society.</p>
      </div>
      <div className="about-image">
  <img src="pic.jpg" alt="About Me" className="about-img" />
</div>
</div>
  );
}
export default About