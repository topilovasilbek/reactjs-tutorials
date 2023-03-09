import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const commonBoxStyle = css`
  margin-top: 20px;
  width: 200px;
  height: 200px;
`;

const switchBgColor = ({ bgColor }) => {
  switch (bgColor) {
    case "red":
      return css`
        background-color: red;
        font-size: 30px;
      `;
    case "yellow":
      return css`
        background-color: yellow;
        font-size: 15px;
      `;
    default:
      return css`
        background-color: red;
      `;
  }
};

export const Box = styled.div`
  ${commonBoxStyle}
  /* background-color: ${({ bgColor }) =>
    bgColor === "red" ? "red" : "yellow"}; */
  ${switchBgColor}
`;

/* export const Box2 = styled.div`
  ${commonBoxStyle}
  background-color: yellow;
`; */

export const A = styled.div`
  margin-top: 20px;
`;

A.red = styled.span`
  color: red;
  font-weight: 900;
  font-size: 30px;
`;

A.yellow = styled.span`
  color: yellow;
`;
