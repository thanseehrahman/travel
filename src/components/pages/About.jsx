import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Wrap>
        <Heading>About Us - The Escape Co.</Heading>
        <Label>
          <Title>Your Next Travel Destination</Title>
        </Label>
        <Description>
          Escape & Co. is a travel agency that creates bespoke travels for
          clients and teams offering them access to exceptional venues, chefs,
          artisans and talents who make their regions shine. They have a strong
          experience built over the last 10 years and a glocal network which
          allows them to create extraordinary escapes. They create emotions for
          customers ultimately strengthening brand values. They work with
          retainer and project-based clients in Europe building bridges between
          the worlds of Art, Gastronomy and Travels.
        </Description>
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

const Label = styled.div`
  padding: 8px 12px;
  display: inline-block;
  background: #e6e6e6;
  border-radius: 8px;
  margin-bottom: 50px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 200%;
  color: #848484;
`;

export default About;
