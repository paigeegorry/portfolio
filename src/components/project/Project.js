import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '../styles/ProjectStyles';

function Project({ project }) {
  const { img, title, subtitle, why, github, site, tech } = project;
  return (
    <Div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p><a href={github}>GitHub</a> | <a href={site}>Site</a></p>
      <h4>{subtitle}</h4>
      {why && <> <h4>Why {title}?</h4> <p>{why}</p> </>}
      <p>Stack: {tech}</p>
    </Div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
