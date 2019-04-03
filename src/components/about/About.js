import React from 'react';
import Who from './Who';
import Tech from './Tech';
import Why from './Why';
import { Header, Nav } from '../styles/ProjectStyles';
import { Div } from '../styles/AboutStyles';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Div>
      <Header>about</Header>
      <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552868813/Screen_Shot_2019-03-17_at_5.25.59_PM.png" alt="Paige E. Gorry" />
      <Who />
      <Why />
      <Tech />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </Nav>
    </Div>
  );
}

export default About;
