// src/components/About.js

import React from 'react';
import '../css/Skills.css'; // Importing the CSS

// Importing images
import htmlLogo from "../assets/images/logo/html-5.png";
import cssLogo from "../assets/images/logo/css-3.png";
import javaLogo from "../assets/images/logo/java.png";
import ReactJsLogo from "../assets/images/logo/react.png";
import JavaScriptLogo from "../assets/images/logo/js.png";
import MongoDBLogo from "../assets/images/logo/leaf.png";
import BootstrapLogo from "../assets/images/logo/bootstrap.png";
import SpringbootLogo from "../assets/images/logo/spring-boot-logo.png";
import pythonLogo from "../assets/images/logo/python.png";
import nodeLogo from "../assets/images/logo/nodejs.png";
import expressLogo from "../assets/images/logo/express.png";
import mysqlLogo from "../assets/images/logo/mysql.png";
import githubLogo from "../assets/images/logo/github.png";
import gitLogo from "../assets/images/logo/git.png";

const skillsList = [
  { name: "Java", icon: javaLogo },
  { name: "SpringBoot", icon: SpringbootLogo },
  { name: "MySQL", icon: mysqlLogo },
  { name: "JavaScript", icon: JavaScriptLogo },
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "NodeJs", icon: nodeLogo },
  { name: "ExpressJs", icon: expressLogo },
  { name: "ReactJs", icon: ReactJsLogo },
  { name: "Bootstrap", icon: BootstrapLogo },
  { name: "MongoDB", icon: MongoDBLogo },
  { name: "Python", icon: pythonLogo },
  { name: "GitHub", icon: githubLogo },
  { name: "Git", icon: gitLogo },
];

const Skills = () => {
  return (
    <section id="skills" className='skills-section'>
    <div className="bg-black-200 mb-16 py-12 border-2 border-gray-700">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
            Skills & Abilities
          </span>
        </h2>
        <div className="flex">
          {skillsList.map((skill, index) => (
            <div key={index} className="m-6 flex-col items-center">
              <div className="bg-gray-800 p-6 rounded-full mb-4 hover:scale-110 transition-transform">
                {/* Using <img> tag instead of next/image */}
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={60} // Adjusted width
                  height={60} // Adjusted height
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="text-white text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
