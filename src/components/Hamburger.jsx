import { React, useState, useRef } from "react";
import styled from "styled-components";

// import useOnClickOutside from '../hooks/useOnClickOutside';
import MobileNav from "./MobileNav";

const BurgerMenu = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div style={{ backgroundColor: 'black' }} />
        <div style={{ backgroundColor: 'black' }} />
        <div style={{ backgroundColor: 'black' }} />
      </StyledBurger>
    <MobileNav open={open}/>
    </>
  )
}

export default BurgerMenu

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 3%;
  right: 5%;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

