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
        
        <Div>
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552801785/screenshot.png" alt="SimAlchemy" />
          <h3>SimAlchemy</h3>
          <h4>A choose your own code school adventure for the command line.</h4>
          <p><a href="https://github.com/team-sailboat/SimAlchemy">GitHub</a> | <a href="https://sim-alchemy.herokuapp.com/">Site</a></p>
          <p>Stack: Node.js, MongoDB, Express, Jest</p>
        </Div>

        <Div>
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552802094/Screen_Shot_2019-03-16_at_10.54.02_PM.png" alt="Are You A Wizard?" />
          <h3>Are You A Wizard?</h3>
          <h4>An interactive Harry-Potter-themed personality quiz where you can learn your wizarding world fate from start to finish!</h4>
          <p><a href="https://github.com/Team-8-ball/team-8-ball.github.io">GitHub</a> | <a href="https://team-8-ball.github.io/">Site</a></p>
          <p>Stack: HTML, CSS, JavaScript</p>
        </Div>

        <Div>
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552802520/screenshot-1.png" alt="Planet Photo Album" />
          <h3>Planet Photo Album</h3>
          <h4>First static React build showcasing some pretty planets from our lovely galaxy. (Yes, I included Pluto.)</h4>
          <p><a href="https://github.com/paigeegorry/photo-album">GitHub</a> | <a href="https://vigilant-stonebraker-f8104c.netlify.com/">Site</a></p>
          <p>Stack: React, CSS</p>
        </Div>

        <Div>
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552803871/Screen_Shot_2019-03-16_at_11.05.25_PM.png" alt="Markdownly" />
          <h3>Markdownly</h3>
          <h4>A markdown editor that allows customers to add, edit, and review markdown files.</h4>
          <p><a href="https://github.com/team-paige-kristin-dee/markdownly">GitHub</a> | <a href="https://quirky-agnesi-ac843b.netlify.com/">Site</a></p>
          <p>Stack: React, Redux, CSS, Jest</p>
        </Div>
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
