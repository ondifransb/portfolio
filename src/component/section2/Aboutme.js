import React from "react";
import styled, { css } from "styled-components";

function Aboutme({ ShowAboutMe, ScrollValue, ScrollVal }) {
  return <Container AnimateMe={ShowAboutMe} Animate={ScrollVal} ScrollValue={ScrollValue}></Container>;
}

const Container = styled.div`
  box-sizing: 0;
  padding: 0;
  top: 1000px;
  position: relative;
  height: 0px;
  width: 0.3%;
  background-color: white;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(107,107,107,1) 42%, rgba(255,255,255,1) 100%);
  left: 5%;
  top: 270px;
  transform: translateX(-50%);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 1s ease-in-out 2s, top 1s ease-in 3s, height 0.2s cubic-bezier(0.47, 0.47, 0.745, 0.615);

  ${(props) =>
    props.AnimateMe &&
    css`
      height: calc(${props.ScrollValue}px - 300px);
      top: 150px;
      opacity: 1;
      /* top: calc(150px + 0px); */
    `} /* panjang div mengikuti nilai scroll */

${(props) =>
    props.Animate &&
    css`
      opacity: 1;
      /* top: calc(150px + 0px); */
    `} /* panjang div mengikuti nilai scroll */
`;

export default Aboutme;
