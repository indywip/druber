import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../GetWindowDimension";

const MobileNav = ({ open }) => {

    return (
        <Wrapper open={open}>
            <Buttons>
                <Sub>Company</Sub>
                <Sub>About</Sub>
                <Sub>Careers</Sub>
                <Sign>Get Started</Sign>
            </Buttons>
        </Wrapper>
    )
}

export default MobileNav

const Wrapper = styled.div`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: center;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        position: fixed;
        transition: transform 0.3s ease-in-out;
        top: 0;
        right: 0;
        height: 100vh;
        width: 35%;
        padding-left: 8%;
        padding-top: 3.5rem;
        background-color: #244478;
        border-left: 1px solid gray;
        align-items: center;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 10%;
    padding-right: 18%;
`

const Sub = styled.h2`
    font-size: 1.4rem;
    color: #fff;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    display: inline-block;
    position: relative;
    text-align: center;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3.5px;
        bottom: 0;
        left: 0;
        background-color: #FD987E;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

const Sign = styled.button`
    color: white;
    background-color: #5083d4;
    border-color: transparent;
    padding: 5% 20px;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 40px;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
    margin-top: 8%;
`