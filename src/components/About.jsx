// src/components/About.js

import React from 'react';
import '../css/About.css'; // Importing the CSS
import profilePic from '../assets/coder1.jpg'; // Import your profile image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>
        <div className="about-text">
          <h2 className="neon-text">About Me</h2>
          <h4 className="neon-text-1">I'm Tanmay Chandrakant Sawant</h4>
          <h5 className="neon-text-2">Software Developer</h5>
          <p>
            I am a versatile Software Developer with a strong foundation in HTML, CSS, JavaScript, Java, and SQL. Proficient in frameworks like React and Spring Boot, I enjoy creating seamless, interactive user experiences. I also have expertise in SQL for efficient database management. With a commitment to continuous learning, I strive to enhance my skill set and stay updated with the latest technologies.
          </p>
          <p>
        <span className="label">Email:</span> tcsawant2003@gmail.com
    </p>
    <p>
        <span className="label">Place:</span> Virar, India
    </p>
          <h5>Education</h5>
          <ul>
            <li>
              <strong>Viva Institute of Technology, Virar</strong> <br />
              Computer Engineering
              CGPA: 8.59
            </li>
            <li>
              <strong>Utkarsha Vidyalaya and Jr. College</strong> <br />
              Marks: 68.62%
            </li>
            <li>
              <strong>S. R. T. Vidya Mandir High School</strong> <br />
              Marks: 88.40%
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
