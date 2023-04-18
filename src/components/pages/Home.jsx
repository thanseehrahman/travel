import React from "react";
import styled from "styled-components";
import TopSlider from "../objects/TopSlider";
import Cards from "../objects/Cards";

function Home() {
  return (
    <Container>
      <Wrap>
        <Heading>Venture to New Horizons</Heading>
        <Description>Your Next Travel Destination</Description>
        <TopSlider />
        <SubHeading>Destinations</SubHeading>
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
    padding: 32px 32px;
    top: 62px;
  }
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
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #848484;
  margin-bottom: 50px;
`;

const SubHeading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin: 60px 0 30px;

  @media (max-width: 640px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    margin-top: 32px;
  }
`;

export default Home;
