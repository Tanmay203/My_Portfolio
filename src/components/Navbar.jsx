// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Navbar.Brand href="#home" className="brand">My Portfolio</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
