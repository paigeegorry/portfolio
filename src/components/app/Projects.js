import React from 'react';
import { Header, Div, Nav, GridView } from '../styles/ProjectStyles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Projects({ projects }) {
  
  const ProjectList = projects.map((project, i) => {
    const { img, title, subtitle, github, site, tech } = project;
    return (
      <Div key={i}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p><a href={github}>GitHub</a> | <a href={site}>Site</a></p>
        <p>Stack: {tech}</p>
      </Div>
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
