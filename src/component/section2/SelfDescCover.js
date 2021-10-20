import React from "react";
import styled, { css } from "styled-components";

function SelfDescContent() {
  return <Container></Container>;
}
const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  margin: 0;
  position: absolute;
  z-index: 0;
  display: flex;
  font-size: 50px;
  text-align: justify;
  align-items: center;
  color: white;
  height: 518px;
  width: 500px;
  top: 150px;
  right: 775px;
  border-radius: 10px;
  background-color: black;
  border-right: 1px solid black;
`;

export default SelfDescContent;
