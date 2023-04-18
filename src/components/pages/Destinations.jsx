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
`;

const Wrap = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #848484;
  margin-bottom: 50px;
`;

export default Destinations;
