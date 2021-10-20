import React from "react";
import styled, { css, keyframes } from "styled-components";

function AnotherDesc({ ScrollVal, setOnHoverDesc, setAboutMee, setContactMe, setTellMe }) {
  return (
    <Container AnimateItNow={ScrollVal}>
      <Aboutme onMouseEnter={(() => setOnHoverDesc(true), () => setAboutMee(true))} onMouseLeave={(() => setOnHoverDesc(false), () => setAboutMee(false))}>
        AboutMe{" "}
      </Aboutme>
      <Contact onMouseEnter={(() => setOnHoverDesc(true), () => setContactMe(true))} onMouseLeave={(() => setOnHoverDesc(false), () => setContactMe(false))}>
        Contact{" "}
      </Contact>
      <TellMe onMouseEnter={(() => setOnHoverDesc(true), () => setTellMe(true))} onMouseLeave={(() => setOnHoverDesc(false), () => setTellMe(false))}>
        TellMeAJoke{" "}
      </TellMe>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 0;
  height: 518px;
  width: 540px;
  top: 250px;
  left: 150px;
  border-radius: 20px;
  background-color: black;
  opacity: 0;
  transition: top 1s ease-in-out 3s, opacity 0.5s ease-in-out 2s;

  ${(props) =>
    props.AnimateItNow &&
    css`
      opacity: 1;
      top: 150px;
    `}
`;

const Aboutme = styled.h1`
  font-size: 100px;
  font-family: sans-serif;
  top: 0px;
  margin: 0;
  position: absolute;
  z-index: 0;
  /* color: red; */
  -webkit-text-stroke: 1px white;
  /* awal membuat warna background text */
  /* background-clip: text;
  background-color: red;
  -webkit-text-fill-color: transparent; */
  /* akhir membuat warna background text */
  left: 0;
  transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out, left 0.8s cubic-bezier(0.47, 0.47, 0.745, 0.615);

  :hover {
    left: 50px;
  }

  ::before {
    content: "About";
    /* box-sizing: border-box; */
    z-index: 1;
    color: white;
    font-size: 100px;
    font-family: sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-right: 0.1px solid black;
    overflow: hidden;
    transition: all 0.8s cubic-bezier(0.47, 0.47, 0.745, 0.615);
  }

  :hover::before {
    width: 100%;
    border-right: 1px solid white;
  }
`;

const Contact = styled.h1`
  font-size: 100px;
  font-family: sans-serif;
  top: 50%;
  margin: 0;
  transform: translateY(-50%);
  position: absolute;
  z-index: 2;
  left: 0;
  /* color: red; */
  -webkit-text-stroke: 1px white;
  /* awal membuat warna background text */
  /* background-clip: text;
  background-color: red;
  -webkit-text-fill-color: transparent; */
  /* akhir membuat warna background text */
  transition: all 0.8s cubic-bezier(0.47, 0.47, 0.745, 0.615);

  :hover {
    left: 50px;
  }

  ::before {
    content: "Cont";
    /* box-sizing: border-box; */
    z-index: 1;
    color: white;
    font-size: 100px;
    font-family: sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-right: 0.1px solid black;
    overflow: hidden;
    transition: all 0.8s cubic-bezier(0.47, 0.47, 0.745, 0.615);
  }

  :hover::before {
    width: 100%;
    border-right: 1px solid white;
  }
`;

const TellMe = styled.h1`
  font-size: 80px;
  font-family: sans-serif;
  bottom: 0px;
  margin: 0;
  position: absolute;
  z-index: 2;
  /* color: red; */
  -webkit-text-stroke: 1px white;
  /* awal membuat warna background text */
  /* background-clip: text;
  background-color: red;
  -webkit-text-fill-color: transparent; */
  /* akhir membuat warna background text */
  left: 0;
  transition: all 0.8s cubic-bezier(0.47, 0.47, 0.745, 0.615);
  :hover {
    left: 50px;
  }

  ::before {
    content: "TellMe";
    /* box-sizing: border-box; */
    color: white;
    z-index: 1;
    font-size: 80px;
    font-family: sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-right: 0.1px solid black;
    overflow: hidden;
    transition: all 0.8s cubic-bezier(0.47, 0.47, 0.745, 0.615);
  }

  :hover::before {
    width: 100%;
    border-right: 1px solid white;
  }
`;

export default AnotherDesc;
