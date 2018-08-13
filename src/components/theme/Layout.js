import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display:flex;
  overflow:hidden;
`;

export const PublicAppWrapper = AppWrapper.extend`
  background-color:#333333;
  justyfi-content:center;
  align-items:center;
`;