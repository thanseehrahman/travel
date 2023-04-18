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

const Labels = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Icon = styled.img`
  width: 24px;
  display: inline-block;
  margin-right: 5px;
`;

const Title = styled.h6`
  font-size: 18px;
  font-weight: 500;
`;

const Category = styled(Location)``;

const Grid = styled.div`
  height: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const MainImage = styled.div`
  height: 100%;
  border-radius: 20px;
  grid-column: span 2;
  grid-row: span 2;
`;

const Image = styled.div`
  height: 100%;
  border-radius: 20px;
`;

const Content = styled.div`
  padding: 60px 0 0;
`;

const SubHeading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #848484;
  line-height: 200%;
`;

export default Destination;
