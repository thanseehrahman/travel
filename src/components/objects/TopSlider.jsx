import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TopSlider() {
  return (
    <Container>
      <Button className="prev">
        <Icon src="/images/icons/left.svg" />
      </Button>
      <Button className="next">
        <Icon src="/images/icons/right.svg" />
      </Button>
      <Slider>
        <Slide to="/destination">
          <Overlay />
        </Slide>
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  height: 310px;
  width: 100%;
  position: relative;
  transition: all 0.6s ease-in-out;
`;

const Button = styled.button`
  height: 60px;
  width: 60px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &.next {
    right: 0;
  }
`;

const Icon = styled.img`
  display: block;
  height: 30px;
`;

const Slider = styled.div`
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 30px;
  transition: all 0.6s ease-out;
`;

const Slide = styled(Link)`
  height: 100%;
  width: 700px;
  overflow: hidden;
  position: relative;
  display: block;
  box-shadow: 10px 18px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.6s ease-in-out;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  transition: all 0.6s ease-in-out;
`;

export default TopSlider;
