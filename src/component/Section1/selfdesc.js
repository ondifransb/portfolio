import React from "react";
import styled, { keyframes } from "styled-components";

function SelfDesc() {
  return (
    <Container>
      <Iama>
        it seems like he is a <br /> front-end{" "}
      </Iama>
      <Develop>
        {" "}
        <p>eveLOVER</p>{" "}
      </Develop>
    </Container>
  );
}

let Animate = keyframes`
0% {
  transform: scale3d(1.15, 1.25, 1);
  color: black;
  }
  30% {
    color: rgb(81, 255, 13);
    transform: scale3d(0.65, 1.05, 1);
  }
  40% {
    color: rgb(81, 255, 13);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    color: rgb(81, 255, 13);
    transform: scale3d(1.1, 0.75, 1);
  }
  65% {
    color: rgb(81, 255, 13);
    transform: scale3d(1, 1, 1);
  }
  75% {
    color: rgb(81, 255, 13);
    transform: scale3d(1, 1, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
    color: black;
  }
}

`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: fit-content;
  font-size: 60px;
`;
const Iama = styled.p`
  width: fit-content;
  color: #fbffff;
  display: inline;
  /* background-color: green; */
`;

const Develop = styled.span`
  height: fit-content;
  /* margin-left: -2px; */
  width: fit-content;
  display: inline-block;
  color: rgb(81, 255, 13);
  animation: ${Animate} 2.5s ease-in-out infinite;
`;

export default SelfDesc;
