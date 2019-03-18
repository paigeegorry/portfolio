import React from 'react';
import { Header, Nav, GridView } from '../styles/ProjectStyles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Project from './Project';

function Projects({ projects }) {
  
  const ProjectList = projects.map((project, i) => {
    return (
      <Project project={project} key={i} />
    );
  });

  return (
    <>
      <Header>Projects</Header>
      
      <GridView>
        {ProjectList}
      </GridView>

      <Nav>
        <Link to="/">Home</Link>
      </Nav>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
