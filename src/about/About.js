import React from 'react';
import { Main } from './About.style';
import { SocialIcon } from 'react-social-icons';

export default function About() {
  return (
    <Main>
      <header>
        <h1>about</h1>
        <span className="social" >
          <SocialIcon url="https://github.com/paigeegorry" network="github" bgColor="#00000" style={{ height: 25, width: 25 }}  />
          <SocialIcon url="mailto: paigeegorry@gmail.com" network="email" bgColor="#00000" style={{ height: 25, width: 25 }}  />
          <SocialIcon url="https://twitter.com/paigeegorry" network="twitter" bgColor="#00000" style={{ height: 25, width: 25 }}  />
          <SocialIcon url="https://linkedin.com/in/paigeegorry" network="linkedin" bgColor="#00000" style={{ height: 25, width: 25 }}  />
        </span>
      </header>
      <div className="content">
        <p>
          Under construction...
        </p>
      </div>
    </Main>

  )
}
