import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cards() {
  return (
    <Grid>
      <Item to="/destination">
        <Overlay className="overlay" />
        <Badge className="badge">
          <Title>Queenstown, New Zealand</Title>
        </Badge>
        <Content className="content">
          <Name>Queenstown</Name>
          <Coordinates>45.0302° S, 168.6615° E</Coordinates>
        </Content>
      </Item>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
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
