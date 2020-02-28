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
    margin-bottom: 50px;
    margin-top: 0px;
    h1 {
      text-shadow: 1px 1px gray;
      margin-bottom: 10px;
    }
  }
  .top {
    font-size: 1.5rem;
    opacity: 30%;
    text-decoration: none;
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top:hover {
    opacity: 70%;
  }
`;
