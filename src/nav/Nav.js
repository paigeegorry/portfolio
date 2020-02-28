import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { styles } from './Nav.styles';
import { SocialIcon } from 'react-social-icons';

export default function Nav() {
  return (
    <Menu styles={styles}>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="projects" className="menu-item" href="/projects">Projects</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <span className="social" style={{marginTop: '18px'}}>
        <SocialIcon url="https://github.com/paigeegorry" network="github" bgColor="#ffff" style={{ height: 25, width: 25 }}  />
        <SocialIcon url="mailto: paigeegorry@gmail.com" network="email" bgColor="#ffff" style={{ height: 25, width: 25 }}  />
        <SocialIcon url="https://twitter.com/paigeegorry" network="twitter" bgColor="#ffff" style={{ height: 25, width: 25 }}  />
        <SocialIcon url="https://linkedin.com/in/paigeegorry" network="linkedin" bgColor="#ffff" style={{ height: 25, width: 25 }}  />
      </span>
    </Menu>
  );
}
