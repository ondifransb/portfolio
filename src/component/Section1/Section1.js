import React, { useState } from "react";
import styled from "styled-components";
import Description from "./desc";
import Name from "./name";

function Section1() {
  const [Onhover, setOnhover] = useState();

  return (
    <Base>
      <Description setOnhover={setOnhover} />
      <Name Onhover={Onhover} />
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
  right: 0;
`;

export default Section1;
