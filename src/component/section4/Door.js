import React from "react";
import styled from "styled-components";

function Door2() {
  return <Container></Container>;
}

const Container = styled.div`
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewX(45deg);
  perspective: 100px;
  padding: 0;
  margin: 0;
  width: 500px;
  height: 300px;
`;

export default Door2;
