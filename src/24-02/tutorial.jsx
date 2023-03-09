import React, { Component } from "react";
import { Box, A, GlobalStyle } from "./tutorial";

class Tutorial extends Component {
  render() {
    const { red: RedText, yellow: YellowText } = A;
    return (
      <>
        <GlobalStyle />
        <div>
          <Box bgColor="red">Box 1</Box>
        </div>
        <div>
          <Box bgColor="yellow">Box 2</Box>
        </div>
        <A>
          <RedText>adasdasdas</RedText>
          <YellowText>as dasdasdasd</YellowText>
        </A>
      </>
    );
  }
}

export { Tutorial };
