import React from 'react'
import styled, { keyframes,css } from 'styled-components';

function AboutMe({ ScrollVal }) {
    return (
        <Container>
            <Content AnimateIt={ScrollVal}>
                <Name AnimateIt={ScrollVal}>
                <h1>Ondi Frans</h1>
                <h1>Butarbutar</h1>
                </Name>
                <Photo AnimateIt={ScrollVal}></Photo>
            </Content>
        </Container>
    )
}

const Animate = keyframes`
from{
    transform: translate(-50%,0%);
    opacity: 0;
}
to{
    transform: translate(-50%,-10%);
    opacity: 1;
}
`
const Animate2 = keyframes`
from{
    opacity: 0;
    transform: translate(0vh, 5vh);
}
to{
    opacity: 1;
    transform: translate(0vh, 0vh);
}
`
const Animate3 = keyframes`
from{
    opacity: 0;
    transform: translate(5vh, 0vh);
}
to{
    opacity: 1;
    transform: translate(0vh, 0vh);
}
`

const  Container = styled.div`
    box-sizing: border-box;
    width: 100 %;
    /* height: 40vw; */
    margin: 20vh 0vh 0vh 0vh;
    background: #010021;
    border-radius: 2vw 2vw 0vw 0vw;
    /* left: 5vw; */
    /* top: 5vw; */
`

const Content = styled.div`
    box-sizing: border-box;
    width: 95%;
    opacity: 0;
    position: relative;
    background: #050228;
    box-shadow: 0px 0px 10px 0.01px #C7C7EF;
    border-radius: 1vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%,0%);
    padding: 5vh 15vh;
    animation: ${(props) => props.AnimateIt && css`
    ${Animate} 1s ease-in forwards
    `};
`

const Name = styled.div`
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    float: right;
    /* background: red; */
    border-radius: 1vw;
    margin: 5vh 0vh;
    /* padding: 7vh 0vh; */
h1{
    font-size: 8vw;
    font-family: Garamond;
    opacity: 0;
    transform: translate(5vh, 0vh);
    color: #C7C7EF;
    text-align: end;
    animation: ${(props) => props.AnimateIt && css`
    ${Animate3} 1s ease-in forwards`}
}
`

const Photo = styled.div`
    box-sizing: border-box;
    width: 25vw;
    height: 25vw;
    opacity: 0;
    transform: translate(0vh, 5vh);
    background: white;
    border-radius: 50%;
    animation: ${(props) => props.AnimateIt && css`
    ${Animate2} 1s ease-in forwards`}
`

export default AboutMe;
