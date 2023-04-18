import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DestinationsData } from "../../context/DataContext";

function Cards() {
  const { destinations } = DestinationsData();

  return (
    <Grid>
      {destinations.map((destination, index) => (
        <Item
          to={"/destination/" + destination.id}
          style={{
            background: `url(${destination.images.image1.small}) center center/cover no-repeat`,
            animationDelay: `${index / 4}s`,
          }}
          key={index}
        >
          <Overlay className="overlay" />
          <Badge className="badge">
            <Title>
              {destination.name}, {destination.country}
            </Title>
          </Badge>
          <Content className="content">
            <Name>{destination.name}</Name>
            <Coordinates>{destination.coordinates}</Coordinates>
          </Content>
        </Item>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled(Link)`
  height: 280px;
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 20px;

  &:hover {
    .overlay {
      opacity: 1;
      visibility: 1;
    }

    .badge {
      opacity: 0;
      visibility: 0;
      transform: translateY(-10px);
    }

    .content {
      opacity: 1;
      visibility: 1;
    }
  }

  animation-name: fade-up;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;

  @keyframes fade-up {
    0% {
      opacity: 0;
      visibility: 0;
      transform: translateY(6px);
    }
    100% {
      opacity: 1;
      visibility: 1;
      transform: translateY(0);
    }
  }
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(360deg, #202020 0%, rgba(32, 32, 32, 0) 100%);
  opacity: 0;
  visibility: 0;
  transition: opacity 0.4s ease-in-out;
`;

const Badge = styled.div`
  padding: 5px 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f9f9f9;
  border-radius: 14px;
  transition: all 0.4s ease-in-out;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const Content = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: 0;
  visibility: 0;
  transition: opacity 0.4s ease-in-out;
`;

const Name = styled.h3`
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  color: #f9f9f9;
`;

const Coordinates = styled.h6`
  text-align: right;
  font-size: 12px;
  font-weight: 500;
  color: #d4d4d4;
`;

export default Cards;
