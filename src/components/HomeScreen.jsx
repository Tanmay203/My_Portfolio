// src/components/HomeScreen.js

import React, { useState, useEffect } from 'react';
import '../css/HomeScreen.css'; // Importing the CSS
import profilePic from '../assets/coder.jpg'; // Import your profile image
import resumePdf from '../assets/resume.pdf'; // Make sure to place your resume here

const HomeScreen = () => {
  const roles = ["Tanmay Sawant", "Programmer", "Developer"]; // Roles to cycle through
  const [currentIndex, setCurrentIndex] = useState(0); // Index for roles

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cycle through roles
    }, 1000); // Change role every 1 second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, [roles.length]); // Add roles.length as a dependency

  return (
    <section id="HomeScreen" className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h1>Hello, I'm</h1> {/* Static text */}
          <h2>{roles[currentIndex]}</h2> {/* Dynamic role text */}
          <p>I build innovative and scalable solutions for the web and beyond.</p>
          <div className="home-buttons">
            {/* Hire Me button */}
            <a href="#contact" className="btn hire-me-btn">Hire Me</a>
            {/* Download Resume button */}
            <a href={resumePdf} download="Tanmay_Sawant_Resume.pdf" className="btn download-btn">Download Resume</a>
          </div>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
