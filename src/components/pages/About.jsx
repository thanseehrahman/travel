import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Wrap>
        <Heading>About Us - The Escape Co.</Heading>
        <Label>
          <Title>Venture to New Horizons</Title>
        </Label>
        <Description>
          Welcome to The Escape Co., your one-stop destination for unforgettable
          travel experiences. We are a premier travel agency dedicated to
          helping you create the perfect getaway, whether you’re looking for a
          romantic beach vacation or an adventurous trek through the mountains.
          At The Escape Co., we believe that travel is not just about escaping
          your daily routine, but also about immersing yourself in new cultures,
          discovering hidden gems, and creating memories that last a lifetime.
          That’s why we offer a wide range of travel options to cater to every
          kind of traveler, from luxury cruises to budget-friendly backpacking
          trips. Our team of experienced travel consultants are passionate about
          travel and are dedicated to providing personalized and attentive
          service to each and every client. We work closely with you to create a
          customized itinerary that fits your preferences, interests, and
          budget, ensuring that every detail of your trip is taken care of. With
          The Escape Co., you can travel with confidence knowing that we have
          your back every step of the way. Let us help you plan your next escape
          and discover the world in a whole new way.
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
