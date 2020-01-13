import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  .subtitle {
    font-weight: bold
  }
`;

export default function ProjectCard({project}) {
  return (
    <Div>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={project.img} className="activator" alt={project.title} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{project.title}<i className="material-icons right">more_vert</i></span>
          {project.new ? 'currently working on' : ''}
          <p><a href={project.github}>Github</a> | <a href={project.site}>Site</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{project.title}<i className="material-icons right">close</i></span>
          <p>{project.subtitle}</p>
          <p><span className="subtitle">Tech Stack:</span> {project.tech}</p>
          <p><span className="subtitle">Why: </span>{project.why}</p>
          <p><span className="subtitle">Fun Fact: </span>{project.funFact}</p>
        </div>
      </div>
    </Div>
  )
}
