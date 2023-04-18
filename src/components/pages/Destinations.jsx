import React from "react";
import Cards from "../objects/Cards";
import styled from "styled-components";

function Destinations() {
  return (
    <Container>
      <Wrap>
        <Heading>Destinations</Heading>
        <Description>Choose your next destination</Description>
        <Cards />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 60px 60px;
  position: relative;
  top: 140px;

  @media (max-width: 1440px) {
    top: 105px;
  }
  @media (max-width: 768px) {
    top: 96px;
  }
  @media (max-width: 480px) {
    padding: 60px 32px 32px;
    top: 62px;
  }
`;

const Wrap = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 980px) {
    font-size: 62px;
  }
  @media (max-width: 640px) {
    font-size: 48px;
  }
  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #848484;
  margin-bottom: 50px;
`;

export default Destinations;
