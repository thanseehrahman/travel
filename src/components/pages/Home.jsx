import React from "react";
import styled from "styled-components";
import TopSlider from "../objects/TopSlider";

function Home() {
  return (
    <Container>
      <Wrap>
        <Heading>Venture to New Horizons</Heading>
        <Description>Your Next Travel Destination</Description>
        <TopSlider />
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
  text-align: center;
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #848484;
  margin-bottom: 50px;
`;

export default Home;
