import React from 'react'
import styled from 'styled-components';
import Description from './Desc';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import PersonalBranding from './PersonalBranding';
import Thingivedone from "./ThingiveDone";


const Header = ({ScrollVal, ScrollVal2, ScrollVal3}) => {
    return (
        <Container>
            <Navbar></Navbar>
            <Description></Description>
            <AboutMe ScrollVal={ScrollVal}></AboutMe>>
            <PersonalBranding ScrollVal2={ScrollVal2}></PersonalBranding>
            <Thingivedone ScrollVal3={ScrollVal3}></Thingivedone>
        </Container>
    )
};

const Container = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 95vw;
    background:#010017;
    background: linear-gradient(90deg, #010017 40%, #000000);
    top: 50%;
    left: 50%;
    transform: translate(-50%,1%);
    border-radius: 1vw;
    box-shadow: 0px 0px 5px 2px #11003F;
    padding: 0vh;
`

export default Header;
