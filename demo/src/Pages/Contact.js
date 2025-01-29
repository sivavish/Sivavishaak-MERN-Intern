import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-subheading">
        I'm here to help! Reach out via social media or send me a message.
      </p>
      <div className="contact-grid">
        {/* Social Media Section */}
        <div className="social-media">
          <h3>Connect on Social Media</h3>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>

       
      
      </div>
    </div>
  );
};

export default Contact;


