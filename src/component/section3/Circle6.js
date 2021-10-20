import React from "react";
import styled, { keyframes, css } from "styled-components";

function Circle6() {
  return <Circlee></Circlee>;
}

// let Animate = keyframes`
// 0%{
//     box-shadow: 0px 0px 5px 5px white inset;
// }

// 50%{
//   box-shadow: 0px 0px 5px 10px white inset;
// }

// 100%{
//     box-shadow: 0px 0px 5px 5px white inset;
// }
// `;

const Circlee = styled.div`
  background-color: black;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 0px white;
  box-shadow: 0px 0px 20px 5px white inset;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Circle6;
