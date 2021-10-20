import React from "react";
import styled, { keyframes } from "styled-components";

function Circle3() {
  return <Circlee></Circlee>;
}

let Animate = keyframes`
0%{  
    transform: translate(-50%, -50%) skew(10deg, 45deg) rotate(0deg);
}
100%{
    transform: translate(-50%, -50%) skew(10deg, 45deg) rotate(360deg);
}
`;

const Circlee = styled.div`
  background-color: red;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: calc(50% - 106px);
  transform: translate(-50%, -50%) skew(10deg, -10deg);
  /* animation: ${Animate} 3s linear infinite; */
`;
export default Circle3;
