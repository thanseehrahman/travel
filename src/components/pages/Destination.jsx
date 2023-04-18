import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DestinationsData } from "../../context/DataContext";
import { useParams } from "react-router-dom";

function Destination() {
  const [destination, setDestination] = useState({});
  const [loading, setLoading] = useState(true);

  const { destinations } = DestinationsData();
  const { id } = useParams();

  useEffect(() => {
    destinations.forEach((destination) => {
      if (destination.id === id) {
        setDestination(destination);
        setLoading(false);
      }
    });
  }, [destinations, id]);

  return (
    <Container>
      <Wrap>
        <Heading>{destination.name}</Heading>
        <Labels>
          <Location>
            <Icon src="/images/icons/location.svg" />
            <Title>
              {destination.name}, {destination.country}
            </Title>
          </Location>
          <Category>
            <Icon src="/images/icons/category.svg" />
            <Title>{destination.category}</Title>
          </Category>
        </Labels>
        <Grid>
          <MainImage
            style={{
              background: `url(${
                loading
                  ? "/images/loading-image.gif"
                  : destination.images.image1.medium
              }) center center/cover no-repeat`,
            }}
          />
          <Image
            style={{
              background: `url(${
                loading
                  ? "/images/loading-image.gif"
                  : destination.images.image2.small
              }) center center/cover no-repeat`,
            }}
          />
          <Image
            style={{
              background: `url(${
                loading
                  ? "/images/loading-image.gif"
                  : destination.images.image3.small
              }) center center/cover no-repeat`,
            }}
          />
          <Image
            style={{
              background: `url(${
                loading
                  ? "/images/loading-image.gif"
                  : destination.images.image4.small
              }) center center/cover no-repeat`,
            }}
          />
          <Image
            style={{
              background: `url(${
                loading
                  ? "/images/loading-image.gif"
                  : destination.images.image5.small
              }) center center/cover no-repeat`,
            }}
          />
        </Grid>
        <Content>
          <SubHeading>Description</SubHeading>
          <Description>{destination.description}</Description>
        </Content>
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

const Labels = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    padding: 8px 12px;
    background: #e6e6e6;
    border-radius: 8px;
  }
`;

const Icon = styled.img`
  width: 24px;
  display: inline-block;
  margin-right: 5px;

  @media (max-width: 640px) {
    width: 20px;
  }
`;

const Title = styled.h6`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Category = styled(Location)``;

const Grid = styled.div`
  height: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 980px) {
    height: 310px;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  @media (max-width: 640px) {
    height: 240px;
  }
`;

const MainImage = styled.div`
  height: 100%;
  border-radius: 20px;
  grid-column: span 2;
  grid-row: span 2;

  @media (max-width: 980px) {
    width: 300px;
    flex: none;
    scroll-snap-align: start;
  }
  @media (max-width: 640px) {
    width: 230px;
  }
`;

const Image = styled.div`
  height: 100%;
  border-radius: 20px;

  @media (max-width: 980px) {
    width: 300px;
    flex: none;
    scroll-snap-align: start;
  }
  @media (max-width: 640px) {
    width: 230px;
  }
`;

const Content = styled.div`
  padding: 60px 0 0;

  @media (max-width: 480px) {
    padding: 32px 0 0;
  }
`;

const SubHeading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #848484;
  line-height: 200%;
`;

export default Destination;
