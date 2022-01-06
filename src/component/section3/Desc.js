import React from 'react'
import styled, { keyframes } from 'styled-components';

function Description() {
    return (
        <Container>
            <HiThere>hi there,</HiThere>
            <Thankyou>thankyou for coming to my portfolio website.</Thankyou>
            <HopeYou>hope you have a good time here.</HopeYou>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 65%;
    /* height: 40vw; */
    margin: 20vh 5vh 80vh 5vh;
    /* background: red; */
    /* left: 5vw; */
    top: 5vw;
`

const Animate = keyframes`
0%{
    left: 70%;
    transform: translate(-50%,100%);
}

50%{
    left: 70%;
    transform: translate(-50%,0%);
}

100%{
    left: 0%;
    transform: translate(0%,0%);
}
`
const Animate2 = keyframes`
0%{
    opacity: 0;
}

100%{
    opacity: 1;
}
`
const Animate3 = keyframes`
0%{
    opacity: 0;
    left: 93vw;
}

100%{
    opacity: 1;
    left: 0vw;
}
`
const Animate4 = keyframes`
0%{
    top: 5vh;
    opacity: 0;
}

100%{
    top: 0vh;
    opacity: 1;
}
`

const HiThere = styled.h1`
    font-size: 6vw;
    font-family: Trebuchet;
    font-weight: lighter;
    /* background-color: red; */
    color: #C7C7EF;
    width: fit-content;
    position: relative;
    opacity: 0;
    left: 70%;
    transform: translate(-50%,100%);
    animation: ${Animate} 4s 2s ease-in-out forwards, ${Animate2} 2s ease-in-out forwards;;
`

const Thankyou = styled.h1`
    font-size: 6vw;
    font-family: Garamond;
    color: #C7C7EF;
    width: fit-content;
    /* background-color: red; */
    left: 93vw;
    opacity: 0;
    position: relative;
    animation: ${Animate3} 2s 4s ease-out forwards;
`

const HopeYou = styled.p`
    font-size: 2vw;
    font-family: Arial;
    color: #5858CB;
    position:relative;
    top: 5vh;
    opacity: 0;
    animation: ${Animate4} 1s 5s ease-out forwards;
`

export default Description;
