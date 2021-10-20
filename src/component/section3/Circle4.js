import React from "react";
import styled, { keyframes, css } from "styled-components";

function Circle4({ OnScroll }) {
  return <Circlee AnimateMe={OnScroll}></Circlee>;
}

let Animate = keyframes`
0%{  
  transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
  border-bottom: 0px solid rgb(82, 54, 204);
}
  

  50%{
    border-bottom: 5px solid rgb(82, 54, 204);
  }

100%{
  transform: translate(-50%, -50%) rotateY(360deg) rotateX(360deg);
  border-bottom: 0px solid rgb(82, 54, 204);
}
`;

const Circlee = styled.div`
  /* background-color: blue; */
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border-bottom: 0px solid rgb(82, 54, 204);
  border-top: 5px solid rgb(82, 54, 204);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
  /* animation: ${Animate} 6s linear infinite 3.5s; */

  animation: ${(props) =>
    props.AnimateMe &&
    css`
      ${Animate} 3s linear infinite;
    `};
`;
export default Circle4;
