import React from "react";
import styled, { keyframes, css } from "styled-components";

function Circle({ OnScroll }) {
  return <Circlee AnimateMe={OnScroll}></Circlee>;
}

let Animate = keyframes`
0%{  
    transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
    border-right: 0px solid rgb(153, 239, 45);
}

50%{
  border-right: 5px solid rgb(153, 239, 45);
}

100%{
    transform: translate(-50%, -50%) rotateY(360deg) rotateX(-360deg);
    border-right: 0px solid rgb(153, 239, 45);
}
`;

const Circlee = styled.div`
  /* background-color: rgb(240, 240, 240); */
  height: 390px;
  width: 390px;
  border-radius: 50%;
  border-right: 0px solid rgb(153, 239, 45);
  border-left: 5px solid rgb(153, 239, 45);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
  /* animation: ${Animate} 6s linear infinite 5s; */

  animation: ${(props) =>
    props.AnimateMe &&
    css`
      ${Animate} 33s linear infinite;
    `};
`;
export default Circle;
