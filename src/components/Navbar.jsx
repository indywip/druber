import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../GetWindowDimension";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";

const Navbar = () => {

    const width = useWindowDimensions().width;

    if (width > 768) {
        return (
            <Wrapper>
                <Buttons>
                    <Logo>DRUBER.</Logo>
                    <Sub>Company</Sub>
                    <Sub>About</Sub>
                    <Sub>Careers</Sub>
                </Buttons>
                <Sign>Sign Up</Sign>
            </Wrapper>
        )
    } else {
        return (
            <Hamburger />
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.6rem;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 10%;
`

const Sub = styled.h2`
    font-family: 'DM Sans', sans-serif;
`

const Sign = styled.button`
    border: 1.5px solid black;
    background-color: transparent;
    color: black;
    padding: 0.1% 3.5%;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 40px;
    font-family: 'DM Sans', sans-serif;

    &:hover {
        color: white;
        background-color: #5083d4;
        border-color: transparent;
    }
`

const Logo = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
`

export default Navbar