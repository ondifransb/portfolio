import React from "react";
import styled, { css } from "styled-components";
import SelfDesc from "./selfdesc";

function Name({ Onhover }) {
  const splitIt = "Ondi Frans".split("");

  return (
    <Content hoverAnimation={Onhover}>
      <Wrapper hoverAnimation={Onhover}>
        {splitIt.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
        <SelfDesc />
      </Wrapper>
    </Content>
  );
}

const Content = styled.nav`
  position: relative;
  /* background-color: blue; */
  box-sizing: border-box;
  padding: 0px;
  margin: 0;
  height: 100vh;
  width: calc(100% - 200px);
  transition: all 0.3s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.5s;
  /* setting onhover siblings */
  ${(props) =>
    props.hoverAnimation &&
    css`
      width: calc(100% - 300px);
    `}/* setting onhover siblings */

    /* &::after {
    content: "";
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 1;
    filter: blur(5px);
    transition: all 0.3s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.5s;

    ${(props) =>
    props.hoverAnimation &&
    css`
      width: calc(10%);
      filter: blur(5px);
    `}
  } */
`;

const Wrapper = styled.div`
  margin-top: 10px;
  position: absolute;
  width: fit-content;
  font-size: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 150px;
  font-weight: 200px;

  span {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  }

  span:nth-child(1) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.5s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226;
      `}/* setting onhover siblings */
  }
  span:nth-child(2) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.6s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(3) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.7s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(4) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.8s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(5) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.9s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(6) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 1s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(7) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 1.1s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(8) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 1.2s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(9) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 1.3s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
  span:nth-child(10) {
    transition: all 0.5s cubic-bezier(0.47, 0.47, 0.745, 0.615) 1.4s;

    /* setting onhover siblings */
    ${(props) =>
      props.hoverAnimation &&
      //hoverAnimation diprops kedalam parents span
      css`
        color: #ff2226; ;
      `}/* setting onhover siblings */
  }
`;
export default Name;
