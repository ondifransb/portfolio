import React from 'react'
import styled from 'styled-components';
import MainDesc from './MainDesc';
import SecondLayer from './SecondLayer';

function MainContent() {
    return (
        <Container>
            <MainDesc></MainDesc>
            <SecondLayer></SecondLayer>
        </Container>
    )
}

const Container = styled.div`
box-sizing: border-box;
height:62vh;
width: 80%;
/* background: green; */
border-radius:1vh;
position: relative;
top: 3vh;
left: 10vw;
transform: translate(0vw,14vh);

`

export default MainContent;
