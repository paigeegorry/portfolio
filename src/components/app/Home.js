import React from 'react';
import { Nav, Head, Section } from '../styles/HeaderStyles';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Head>
        <h1>paige e. gorry</h1>
        <h2>full stack software developer</h2>
      </Head>
      <Nav>
        <a href="https://www.linkedin.com/in/paigeegorry/">
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552798887/linkedin_circle_black-128.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/paigeegorry">
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552798880/25231.png" alt="Github" />
        </a>
        <a href="mailto:paigeegorry@gmail.com">
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552798877/9556.png" alt="Email" />
        </a>
        <a href="https://twitter.com/paigeegorry">
          <img src="https://res.cloudinary.com/dkrup6iyl/image/upload/v1552799144/twitter_circle_black-128.png" alt="Twitter" />
        </a>
      </Nav>

      <Section>
        <Link to="/projects">View Projects</Link>
      </Section>
    </>
  );
}

export default Home;
