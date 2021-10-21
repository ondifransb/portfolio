import React from "react";
import styled from "styled-components";
import Door from "./Door";
// import Door2 from "./Door2";

function Section4() {
  return (
    <Base>
      <Door />
      {/* <Door2 /> */}
    </Base>
  );
}

const Base = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: black;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export default Section4;
