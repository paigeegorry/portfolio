import styled from 'styled-components';

export const Header = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: Raleway, sans-serif;
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

  img {
    width: 95vw;
  }

  h3, h4, p {
    font-family: Raleway, sans-serif;
    margin: 20px 0px 0px 0px;
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
  font-family: Raleway, sans-serif;
  font-size: 1.5em;
  text-align: center;

  a {
    text-decoration: none;
    color: darkslategray;
    font-style: italic;
  }
  a:hover {
    font-weight: bold;
    background: darkslategray;
    color: white;
  }
`;
