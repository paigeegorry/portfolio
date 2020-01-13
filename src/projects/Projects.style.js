import styled from 'styled-components';

export const Main = styled.main`
  .project-list {
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-column-gap: 50px;
    padding: 0px 50px 0px 50px;
  }
  header {
    text-align: center;
    margin-bottom: 40px;
    a {
      opacity: 30%;
      text-decoration: none;
      color: black;
      font-size: .75rem;
      font-weight: bold;
    }
    a:hover {
      opacity: 70%;
    }
    h1 {
      text-shadow: 1px 1px gray;
      margin-bottom: 10px;
    }
  }
`;
