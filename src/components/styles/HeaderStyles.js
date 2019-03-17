import styled from 'styled-components';

export const Head = styled.header`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
  margin-left: 20px;
  margin: 25vh 50vh 0vh 50vh;
  margin-top: 25vh;

  font-family: Montserrat, sans-serif;
  text-align: center;

  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-shadow: 2px 2px gray;

  h1 {
    font-size: 4em;
  }

  @media (max-width:1019px) {
    h1 {
      font-size: 3.5em;
      padding-right: 10px;
    }
  }

  @media (max-width:930px) {
    margin: 20vh 0vw 0vh 0vw;
  }
`;

export const Nav = styled.nav`
  img {
    width: 50px;
    height: 50px;
    padding: 0px 10px 0px 10px;
  }
  
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (max-width:930px) {
    display: fixed;
    margin-top: 10px;
  }
`;


export const Section = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 150px;

  a {
      font-family: Montserrat, sans-serif;
      color: gray;
      text-decoration: none;
      font-size: 1.25em;
  }
  a:hover {
    font-weight: bolder;
    font-style: italic;
  }
`;

