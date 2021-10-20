import React from "react";
import styled, { keyframes, css } from "styled-components";

function Circle2({ OnScroll }) {
  return <Circlee AnimateMe={OnScroll}></Circlee>;
}

let Animate = keyframes`
0%{  
  transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
    border-top: 0px solid rgb(09, 565, 794);
}

50%{
  border-top: 5px solid rgb(09, 565, 794);
}

100%{
  transform: translate(-50%, -50%) rotateY(-360deg) rotateX(-360deg);
    border-top: 0px solid rgb(09, 565, 794);
}
`;

const Circlee = styled.div`
  /* background-color: yellow; */
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border-top: 0px solid rgb(09, 565, 794);
  border-bottom: 5px solid rgb(09, 565, 794);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
  /* animation: ${Animate} 6s linear infinite 4.5s; */

  animation: ${(props) =>
    props.AnimateMe &&
    css`
      ${Animate} 26s linear infinite;
    `};
`;
export default Circle2;
