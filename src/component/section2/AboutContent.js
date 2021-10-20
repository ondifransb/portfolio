import React from "react";
import styled, { css } from "styled-components";

function AboutContent({ AboutMee }) {
  return (
    <Container AnimateMe={AboutMee}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam sunt maiores, aut optio modi.</p>
    </Container>
  );
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
  transition: all 0.8s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.3s;

  ${(props) =>
    props.AnimateMe &&
    css`
      right: 150px;
      border-right: 1px solid white;
    `}
`;

// const DivText = styled.div`
//   box-sizing: border-box;
//   padding: 0px;
//   margin: 0;
//   width: fit-content;
//   height: fit-content;
//   background-color: green;
//   font-size: 50px;
//   text-align: justify;
//   align-items: center;
//   color: black;
// `;

export default AboutContent;
