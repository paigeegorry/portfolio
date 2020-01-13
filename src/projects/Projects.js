import React from 'react';
import styled from 'styled-components';
import { getProjects } from '../services/projects';
import ProjectCard from './ProjectCard';

const Main = styled.main`
  .project-list {
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-column-gap: 50px;
    padding: 0px 50px 0px 50px;
  }
  h1 {
    text-align: center;
    text-shadow: 1px 1px gray;
  }
`;

export default function Projects() {
  const listOfProjects = getProjects().map((project, idx) => {
    return <ProjectCard project={project} key={idx} />
  })
  return (
    <Main>
      <h1>projects</h1>
      <div className="project-list">
        {listOfProjects}
      </div>
    </Main>
  )
}
