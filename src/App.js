import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import drone from './assets/drone.png';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Logo>DRUBER.</Logo>
      <Hero>
        <Col>
          <Header>Glide your way to your destination.</Header>
          <Sub>Get by the city with ease through our ride share application.</Sub>
          <Sign>Get Started</Sign>
        </Col>
        <Col>
          <Drone src={drone} alt='drone' />
        </Col>
      </Hero>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  @media (max-width: 768px) {
    margin-top: 5%;
  }
`

const Sub = styled.p`
  font-size: 1.5rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  margin-top: -1.8rem;
`

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5% 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Header = styled.h1`
  font-size: 3.5rem;
  font-family: 'DM Sans', sans-serif;
`

const Drone = styled.img`
  width: 110%;
  align-self: center;
  margin-left: -10%;

  @media (min-width: 992px) and (max-width: 1080px) {
    margin-left: 0%;
  }
`

const Sign = styled.button`
    border: 1.5px solid black;
    background-color: transparent;
    color: black;
    padding: 2.2% 5%;
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
  display: none;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;

  @media (max-width: 768px) {
    align-self: center;
    display: block;
    text-align: center;
  }
`