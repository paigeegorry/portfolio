import styled from 'styled-components';

export const Header = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Quicksand&display=swap');
  font-family: Montserrat, sans-serif;
  font-size: 3.5em;
  text-align: right;
  
  padding: 0px 10px 10px 0px;
  
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  box-shadow: 2px 2px lightgray;
  `;
  
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: right;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    span {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  img {
    width: 95vw;
    box-shadow: 4px 4px black;
  }

  img:hover {
    opacity: 0.5;
  }

  #new {
    color: red;
  }

  h2, h3, h4, p {
    font-family: Montserrat, sans-serif;
    margin: 10px 0px 0px 0px;
    text-align: center;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    text-transform: uppercase;
  }

  p {
    a {
      text-decoration: none;
      font-weight: bold;
      font-style: italic;
      color: darkslategray;
    }
    a:hover {
      font-weight: bold;
      background: darkslategray;
      color: white;
    }
  }

  @media (min-width:600px) {
    text-align: left;
    h3, h4, p {
      margin-left: 10px;
    }
    h3 {
      font-size: 1.5em;
    }
    h4 {
      font-size: 1.25em;
    }
    p, a {
      font-size: 1.1em;
    }
  }
`;

export const Nav = styled.nav`
  font-family: Montserrat, sans-serif;
  font-size: 1.5em;
  text-align: center;
  display: flex;
  justify-content: space-around;

  a {
    margin: 50px 5px 50px 5px;
    padding: 10px;
    align-self: center;

    font-size: 1.15em;
    background: black;
    text-transform: lowercase;
    text-decoration: none;
    color: white;
    font-style: italic;
  }
  a:hover {
    font-weight: bold;
    background: slategray;
    color: white;
  }
`;

export const GridView = styled.section`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;  
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    
    img {
      width: 45vw;
      align-self: center;
    }
    
    p, h3, h4 {
      align-self: center;
    }
    
    div {
      width: 45vw;
    }
  }

`;
