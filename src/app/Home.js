import React from 'react';
import { Header } from './Home.style.js'

export default function Home() {
  return (
    <Header>
      <div class="animated fadeIn">
        <h1>
          Paige E. Gorry
        </h1>
        <p>full stack developer</p>
        <a href="/projects">click to enter</a>
      </div>
    </Header>
  );
}
