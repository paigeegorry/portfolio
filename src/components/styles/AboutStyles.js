import styled from 'styled-components';

export const Div = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: Raleway, sans-serif;
  
  img {
    border-radius: 100px;
    width: 40vw;
    margin: 0px 25px 0px 50px;
    float: left;
  }

  div {
    width: 75vw;
  }

  section {
    float: right;
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

  @media (max-width:600px) {
    section {
      display: block;
      float: inherit;
    }
    img {
      float: inherit;
      display: block;
      width: 75vw;
    }
  }
`;

