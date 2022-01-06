import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "./MainContainer";

function Section3({ScrollVal, ScrollVal2, ScrollVal3}) {
  return (
    <Base>
      <Header ScrollVal={ScrollVal} ScrollVal2={ScrollVal2} ScrollVal3={ScrollVal3}></Header>;
    </Base>
  );
}

const Base = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
  /* height: 100%; */
  width: 100%;
  position: relative;
  /* overflow: hidden; */
`;

export default Section3;
