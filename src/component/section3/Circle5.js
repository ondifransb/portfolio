import React from "react";
import styled, { keyframes, css } from "styled-components";

function Circle5({ OnScroll }) {
  return <Circlee AnimateMe={OnScroll}></Circlee>;
}

let Animate = keyframes`
0%{  
  transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
  border-left: 0px solid rgb(616, 68, 315);
}

50%{
  border-left: 5px solid rgb(616, 68, 315);
}

100%{
  transform: translate(-50%, -50%) rotateY(-360deg) rotateX(360deg);
  border-left: 0px solid rgb(616, 68, 315);
}
`;

const Circlee = styled.div`
  /* background-color: green; */
  height: 210px;
  width: 210px;
  border-radius: 50%;
  border-right: 5px solid rgb(616, 68, 315);
  border-left: 0px solid rgb(616, 68, 315);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
  /* animation: ${Animate} 6s linear infinite 4s; */

  animation: ${(props) =>
    props.AnimateMe &&
    css`
      ${Animate} 13s linear infinite;
    `};
`;
export default Circle5;
