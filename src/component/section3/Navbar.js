import React from 'react'
import styled, { keyframes } from 'styled-components';

function Navbar() {
    return (
        <Container>
            <h1>the real one</h1>
        </Container>
    )
}

const Animate = keyframes`
from{
    top: 0vh;
    opacity: 0;
}
to{
    top: 2vh;
    opacity: 1;
}
`

const Container = styled.div`
box-sizing: border-box;
height: 5vh;
width: 95%;
/* background: #D11B1B; */
/* border: 1px solid blue; */
border-radius: 2vh;
position: relative;
top: 0vh;
opacity: 0;
transform: translate(0%,0vh);
animation: ${Animate} 1s 5s ease-out forwards;

h1{
    color: #CBCBEB;
    transform: translate(-1%,-50%);
    top: 50%;
    left: 2%;
    position: absolute;
    font-family: Arial;
    font-size: 2vh;
    /* text-align: center; */
}

`

export default Navbar;
