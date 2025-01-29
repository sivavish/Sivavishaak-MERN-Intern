import React from "react";
import "./Projects.css"; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img className="project-img" src="womensfty.jpg" alt="Project 1" />
          <div className="project-details">
            <h3 className="project-title">Women Safety</h3>
            <p className="project-description">
            Women safety Analytics <br/>
• Nowdays ,harassment turned as a common event. so , Developing a AI model to detect the harassment using
 ML and DL <br/>
• Going to train the harassment dataset (there is no data set for this so training the model) to the
 exisxting cameras(cameras are mandatory in many places like industries,commercial areas,etc and also most
 of the harassment cases happening in these places)if the AI model detect it will alert to the front desk first and
 then it will alert to the near by police station. <br/>
 • 1)Detecting the harassment,<br/>
   2)Emotional Detection,<br/>
   3)Alerting to the Front-desk and then to the police
            </p>
          </div>
        </div>
        <div className="project-card">
          <img className="project-img" src="roadstfy.jpg" alt="Project 2" />
          <div className="project-details">
            <h3 className="project-title">Road Safety</h3>
            <p className="project-description">
            Our road safety project is designed to tackle the leading causes of accidents using advanced technology. By integrating real-time monitoring, IoT, and AI, the system tracks vital vehicle parameters like tire pressure, brake performance, and overloading, while also monitoring the driver’s health through wearable devices that check heart rate, blood pressure, and oxygen levels. If an accident occurs, the system immediately sends the vehicle’s live location to emergency responders, contacts emergency contacts, and shares crucial health information. Additionally, AI analyzes the driver’s behavior to detect fatigue or risky driving, ensuring quicker intervention. This holistic approach reduces accidents, speeds up emergency responses, and ultimately saves lives.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img className="project-img" src="chatbot.jpg" alt="Project 3" />
          <div className="project-details">
            <h3 className="project-title">Health Chatbot</h3>
            <p className="project-description">
            Our solution is a voice-assisted chatbot designed to improve healthcare access in rural communities. The chatbot, which operates in the local language, provides users with information about available health schemes and simple remedies for common health issues. Using voice commands, individuals can easily interact with the system to get guidance on addressing minor illnesses or navigating healthcare options, making it especially useful in areas with limited access to medical professionals or resources. This technology empowers rural populations by offering timely and accessible healthcare information, improving health outcomes through simple, actionable advice and enhancing overall awareness of health services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
