import React from "react";
import styled, { css, keyframes } from "styled-components";

const Property1 = ({ ScrollVall }) => {
  return <Content AnimateItNow={ScrollVall}></Content>;
};

let AnimateColor = keyframes`
  0%{
    background-color: rgb(81, 255, 13);
    box-shadow: 0px 0px 10px 3px rgb(81, 255, 13);
  }
  50%{
    background-color: rgb(201, 385, 43);
    box-shadow: 0px 0px 10px 5px rgb(201, 385, 43);
  }
  100%{
    background-color: rgb(81, 255, 13);
    box-shadow: 0px 0px 10px 3px rgb(81, 255, 13);
  }
`;

const Content = styled.div`
  height: 195px;
  width: 0.3%;
  background-color: rgb(81, 255, 13);
  border-radius: 20px;
  position: absolute;
  z-index: 1;
  margin: 0;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 1s ease-in-out, top 1s ease-in-out, width 1s ease-in-out 1s, box-shadow 1s ease-in-out 3s, height 1s ease-in-out 3s;
  animation: ${(props) =>
    props.AnimateItNow &&
    css`
      ${AnimateColor} 2s ease-in-out 4s infinite
    `};

  ${(props) =>
    props.AnimateItNow &&
    css`
      height: 40px;
      opacity: 1;
      top: 50px;
      width: calc(80% - 5px);
      box-shadow: 0px 0px 10px 3px rgb(101, 205, 53);
    `}

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    background-color: whitesmoke;
    border-radius: inherit;
    left: 0;
    opacity: 1;
    transition: border-radius 1s ease-in-out 2s, width 1s ease-in-out 2s, opacity 1s ease-in-out 3s;

    ${(props) =>
      props.AnimateItNow &&
      css`
        width: 0%;
        opacity: 0;
        border-radius: 20px;
      `};
  }
`;

export default Property1;
