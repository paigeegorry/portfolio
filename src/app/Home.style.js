import styled from 'styled-components';

const Header = styled.header`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-transform: lowercase;
    h1 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }
    a {
      opacity: 30%;
      text-decoration: none;
      color: black;
      font-size: .75rem;
    }
    a:hover {
      opacity: 70%;
    }
  }
`;

export default Header
