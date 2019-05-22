import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '../styles/ProjectStyles';

function Project({ project }) {
  const { img, title, subtitle, github, site, tech } = project;
  return (
    <Div>
      <a href={site}><img src={img} alt={title} /></a>
      <div>
        <span>
          {project.new && <h4 id="new">NEW!!</h4>}
          <h2>{title}</h2>
          <p><a href={github}>GitHub</a> <hr></hr> <a href={site}>Site</a></p>
        </span>
        <span>
          <p>{subtitle}</p>
          <p id="tech">{tech}</p>
        </span>
      </div>
    </Div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
