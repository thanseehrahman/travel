import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Wrap>
        <Heading>Venture to New Horizons</Heading>
        <Description>Your Next Travel Destination</Description>
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

export default Home;
