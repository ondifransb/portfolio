import React from "react";
import styled from "styled-components";

function Description({ setOnhover }) {
  return (
    <DescContent onMouseEnter={() => setOnhover(true)} onMouseLeave={() => setOnhover(false)}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, temporibus.</p>
    </DescContent>
  );
}

const DescContent = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  background-color: white;
  color: black;
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s cubic-bezier(0.47, 0.47, 0.745, 0.615) 0.5s;
  padding: 2px 3px 0px 3px;

  p {
    margin: 0;
    background-color: white;
  }

  &:hover {
    padding: 10px 15px 0px 15px;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: black;
    border-radius: 0px;
    box-shadow: 6px 0px 4px 2px rgb(120, 120, 120);
    width: 100%;
    height: 100%;
    right: 5px;
    bottom: 0px;
    z-index: 0;
    transition: all 0.3s ease-in 0.5s;
  }

  &:hover::after {
    right: 200px;
    box-shadow: 10px 0px 10px 2px rgb(140, 140, 140);
  }
`;

export default Description;
