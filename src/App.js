// src/App.js

import React from 'react';
import About from './components/About';
import MyNavbar from './components/Navbar';
import HomeScreen from './components/HomeScreen'; // Importing About component
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <HomeScreen />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
