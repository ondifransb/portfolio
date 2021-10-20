import React from "react";
import styled, { css, keyframes } from "styled-components";

function Circle0({ OnScroll }) {
  return <Circlee AnimateMe={OnScroll}></Circlee>;
}

let Animate = keyframes`
0%{  
  transform: translate(-50%, -50%) skew(0deg, 0deg) rotateY(0deg) rotateX(0deg);
  border-bottom: 0px solid gray;
}

50%{
  border-bottom: 5px solid gray;
}

100%{
  transform: translate(-50%, -50%) skew(0deg, 0deg) rotateY(360deg) rotateX(360deg);
  border-bottom: 0px solid gray;
}
`;

const Circlee = styled.div`
  /* background-color: yellow; */
  height: 480px;
  width: 480px;
  border-radius: 50%;
  border-top: 5px solid gray;
  border-bottom: 0px solid gray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skew(0deg, 0deg) rotateY(0deg) rotateX(0deg);
  /* animation: ${Animate} 6s linear infinite 5.5s; */

  animation: ${(props) =>
    props.AnimateMe &&
    css`
      ${Animate} 53s linear infinite;
    `};
`;
export default Circle0;
