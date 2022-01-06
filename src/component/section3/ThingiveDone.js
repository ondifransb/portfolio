import React from 'react'
import styled, { keyframes, css } from 'styled-components';

function Thingivedone({ScrollVal3}) {
    return (
        <Container>
            <Things AnimateIt={ScrollVal3}>things</Things>
            {/* <IveDone AnimateIt={ScrollVal3}>i've done</IveDone> */}
            <ContentContainer></ContentContainer>
        </Container>
    )
}

const Animate = keyframes`
from{
    opacity: 0;
    transform: translate(0vh, -2vh);
}
to{
    opacity: 1;
    transform: translate(0vh, -6vh);
}
`

const Animate2 = keyframes`
from{
    opacity: 0;
    transform: translate(-30vw, 0vh);
}
to{
    opacity: 1;
    transform: translate(0vw, 0vh);
}
`

const Container = styled.div`
    box-sizing: border-box;
    width: 95%;
    position: relative;
    background: #050228;
    box-shadow: 0px 0px 8px 0px #C7C7EF;
    border-radius: 1vw;
    margin-top: 10vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-10%);
    padding: 8vh 0vh;
`

const Things = styled.h1`
    font-size: 8vw;
    font-family: Garamond;
    font-weight: lighter;
    color: #6969A1;
    text-align: end;
    line-height: 14vh;
    position: relative;
    opacity: 0;
    transform: translate(0vh, -2vh);
    right: 2vw;
    animation: ${(props) => props.AnimateIt && css`
    ${Animate} 1s ease-out forwards
    `};
`

// const IveDone = styled.h1`
//     font-size: 8vw;
//     font-family: Garamond;
//     font-weight: lighter;
//     color: #6969A1;
//     opacity: 0;
//     transform: translate(-30vw, 0vh);
//     text-align: end;
//     line-height: 14vh;
//     position: relative;
//     right: 2vw;
//     animation: ${(props) => props.AnimateIt && css`
//     ${Animate2} 1s ease-in forwards
//     `};
// `

const ContentContainer = styled.div`
    box-sizing: border-box;
    width: 95%;
    height: 70vh;
    /* background: red; */
    position: relative;
    left: 50%;
    top: calc(40% - 6vh);
    transform: translate(-50%,calc(3% - 6vh));
    border-radius: 1vw;
    box-shadow: 0px 0px 8px 0px #C7C7EF;
`

export default Thingivedone;
