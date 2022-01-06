import React from 'react'
import styled, { keyframes, css } from 'styled-components';

function PersonalBranding({ ScrollVal2 }) {
    return (
        <Container AnimateIt={ScrollVal2}>
            <h1>bo</h1>
            <h1>ut</h1>
            <h1>me</h1>
            <h2>i am a what-so-called frontend-developer,</h2>
            <h2>for the last few year, i was preparing myself and my skill to be worth,</h2>
            <h2>that's why i dont really have any real-experiences on this field yet,</h2>
            <h2>i use reactjs as my tool to build a interactive and light web-app.</h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>"have you ever found someone who choose their own path</h2>
            <h2>and put all of their effort and soul on it?"</h2>
        </Container>
    )
}

const Animate = keyframes`
from{
    opacity: 0;
    transform: translate(0vh, 5vh);
}
to{
    opacity: 1;
    transform: translate(0vh, 0vh);
}
`

const Animate2 = keyframes`
from{
    opacity: 0;
    transform: translate(5vh, 3vh);
}
to{
    opacity: 1;
    transform: translate(0vh, 3vh);
}
`

const Container = styled.div`
    box-sizing: border-box;
    width: 95%;
    height: 30vw;
    position: relative;
    background: #050228;
    /* background: red; */
    box-shadow: 0px 0px 8px 0px #C7C7EF;
    border-radius: 1vw;
    margin-top: 3vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-10%);
    padding: 8vh 0vh;
h1{
    font-size: 10vw;
    font-family: Garamond;
    font-weight: lighter;
    color: #6969A1;
    text-align: start;
    line-height: 14vh;
    position: relative;
    opacity: 0;
    transform: translate(0vh, 5vh);
    left: 2vw;
    animation: ${(props) => props.AnimateIt && css`
    ${Animate} 1s ease-in forwards
    `};
}

h2{
    position: relative;
    font-size: 4vh;
    /* background-color: white; */
    font-family: Tahoma (sans-serif);
    font-weight: lighter;
    color: #C7C7EF;
    text-align: start;
    left: 33vw;
    line-height: 4vh;
    top: -40vh;
    opacity: 0;
    transform: translate(5vh, 3vh);
    animation: ${(props) => props.AnimateIt && css`
    ${Animate2} 1s ease-in forwards
    `};
}
`

export default PersonalBranding;
