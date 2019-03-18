import React from 'react';
import styled from 'styled-components';
import Who from './Who';
import Tech from './Tech';
import Why from './Why';
import { Header, Nav } from '../styles/ProjectStyles';
import { Link } from 'react-router-dom';

const Div = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: Raleway, sans-serif;
  
  img {
    border-radius: 100px;
    width: 25vw;
    margin: 0px 25px 0px 50px;
    float: left;
  }

  div {
    width: 75vw;
  }

  section {
    float: right;
    margin-right: 50px;
    ul {
      padding: 0px;
      li {
        list-style: none;
      }
    }
  }

  nav {
    margin-top: 150px;
  }
`;

function About() {
  return (
    <Div>
      <Header>about</Header>
      <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552868813/Screen_Shot_2019-03-17_at_5.25.59_PM.png" alt="Paige E. Gorry" />
      <Tech />
      <Who />
      <Why />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </Nav>
    </Div>
  );
}

export default About;
