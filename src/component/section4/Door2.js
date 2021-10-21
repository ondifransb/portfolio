import React from "react";
import styled from "styled-components";

function Door() {
  return (
    <Container>
      <Content />
      <Content1 />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: red;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%) skewY(20deg);
  padding: 0;
  margin: 0;
  width: 400px;
  height: 600px;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0 0px gray, 1px -1px gray, 2px -2px gray, 3px -3px gray, 4px -4px gray, 5px -5px gray, 6px -6px gray, 7px -7px gray, 8px -8px gray, 9px -9px gray, 10px -10px gray, 11px -11px gray;
`;

const Content = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
  padding: 0;
  margin: 0;
  width: 325px;
  height: 350px;
  border-radius: 30px 30px 0px 0px;
  background-color: black;
  box-shadow: 0px 0px gray inset, 1px -1px gray inset, 2px -2px gray inset, 3px -3px gray inset, 4px -4px gray inset, 5px -5px gray inset, 6px -6px gray inset, 7px -7px gray inset, 8px -8px gray inset, 9px -9px gray inset,
    10px -10px gray inset, 11px -11px gray inset;
`;

const Content1 = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  padding: 0;
  margin: 0;
  width: 325px;
  height: 120px;
  border-radius: 30px 30px 0px 0px;
  background-color: black;
  box-shadow: 0px 0px gray inset, 1px -1px gray inset, 2px -2px gray inset, 3px -3px gray inset, 4px -4px gray inset, 5px -5px gray inset, 6px -6px gray inset, 7px -7px gray inset, 8px -8px gray inset, 9px -9px gray inset,
    10px -10px gray inset, 11px -11px gray inset;
`;

export default Door;
