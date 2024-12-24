import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../css/Projects.css'; // Ensure the CSS is properly imported
import image11 from '../assets/images/projects/11.png';
import image22 from '../assets/images/projects/22.png';
// Import FontAwesome for the eye icon
import { FaEye } from 'react-icons/fa';

const projects = [
  {
    title: 'Railway Ticket Management System',
    description:
      'The Railway Ticket Management System is a Java Swing-based desktop application of booking railway tickets. ',
    link: 'https://github.com/Tanmay203/RailwayTicketSystem',
    image: image11,
  },
  {
    title: 'My Portfolio',
    description:
      'E-commerce application with React and Strapi. Buy and sell electronic gadgets! Integrated with Stripe for payment processing.',
    link: 'https://github.com/Tanmay203/My_Portfolio',
    image: image22,
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="projects-title"><span className="neon-text">My Projects</span></h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="bg-secondary project-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    height: '200px',
                    borderRadius: '10px',
                  }}
                ></div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="neon-text-1">{project.title}</Card.Title>
                  <Card.Text className='text'>{project.description}</Card.Text>
                  <Card.Link href={project.link} target="_blank">
                    <div className="btn-view">
                      <FaEye />
                    </div>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
