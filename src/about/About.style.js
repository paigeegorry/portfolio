import styled from 'styled-components';

export const Main = styled.main`
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 0px;
    margin-top: 45px;
    text-shadow: 1px 1px gray;
    margin-bottom: 10px;
  }
  span {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }
}
.content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
`;
