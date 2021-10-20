import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Circle0 from "./Circle copy";
import Circle2 from "./Circle2";
import Circle4 from "./Circle4";
import Circle5 from "./Circle5";
import Circle6 from "./Circle6";

function Section3() {
  const [ScrollVall, setScrollVall] = useState(window.scrollY);
  useEffect(() => {
    function ScrollFunction() {
      setScrollVall(window.scrollY);
    }
    window.addEventListener("scroll", ScrollFunction);
    return () => {
      window.removeEventListener("scroll", ScrollFunction);
    };
  }, [ScrollVall]);

  const [OnScroll, setOnScroll] = useState(false);
  useEffect(() => {
    if (ScrollVall >= 1430) {
      setOnScroll(true);
      //   console.log("kenapa" + ScrollVall);
    } else {
      setOnScroll(false);
    }
  }, [ScrollVall]);

  return (
    <Base>
      <Circle0 OnScroll={OnScroll} />
      <Circle OnScroll={OnScroll} />
      <Circle2 OnScroll={OnScroll} />
      <Circle5 OnScroll={OnScroll} />
      <Circle4 OnScroll={OnScroll} />
      <Circle6 />

      <h1>art of life</h1>
    </Base>
  );
}

const Base = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  h1 {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: gray;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size: 20px;
    opacity: 0.2;
  }
`;

export default Section3;
