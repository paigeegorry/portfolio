import React from 'react';
import { Main } from './Projects.style';
import { getProjects } from '../services/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const listOfProjects = getProjects().map((project, idx) => {
    return <ProjectCard project={project} key={idx} />
  })
  return (
    <Main>
      <header class="animated fadeIn">
        <h1>projects</h1>
      </header>
      <div className="project-list">
        {listOfProjects}
      </div>
      <a href="#top" className="top">back to top</a>
    </Main>
  )
}
