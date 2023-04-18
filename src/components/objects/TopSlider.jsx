import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DestinationsData } from "../../context/DataContext";

function TopSlider() {
  const [position, setPosition] = useState(1);
  const [randomDestinations, setRandomDestinations] = useState([]);
  const [randomImage, setRandomImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const { destinations } = DestinationsData();

  useEffect(() => {
    const filterDestinations = () => {
      const shuffled = [...destinations].sort(() => 0.5 - Math.random());
      const filtered = shuffled.slice(0, 3);

      setRandomDestinations(filtered);
      setLoading(false);
    };

    filterDestinations();

    const setImageNumber = () => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;

      setRandomImage(randomNumber);
    };

    setImageNumber();
  }, []);

  const positions = {
    prev: { left: "0", transform: "translateX(0)" },
    center: { left: "50%", transform: "translateX(-50%)" },
    next: { left: "100%", transform: "translateX(-100%)" },
  };

  const styles = {
    scale: "scale(0.95)",
    activeScale: "scale(1)",
    overlay: "rgba(255,255,255,0.6)",
    activeOverlay: "rgba(255,255,255,0.1)",
  };

  const prevSlide = () => {
    if (position === 2) {
      setPosition(1);
    } else {
      setPosition(0);
    }
  };

  const nextSlide = () => {
    if (position === 0) {
      setPosition(1);
    } else {
      setPosition(2);
    }
  };

  return (
    <Container>
      <Button onClick={prevSlide} className="prev">
        <Icon src="/images/icons/left.svg" />
      </Button>
      <Button onClick={nextSlide} className="next">
        <Icon src="/images/icons/right.svg" />
      </Button>
      <Slider
        style={
          position === 0
            ? positions.prev
            : position === 2
            ? positions.next
            : positions.center
        }
      >
        {randomDestinations.map((destination, index) => (
          <Slide
            to={"/destination" + destination.id}
            style={{
              background: `url(${
                loading
                  ? "/images/loading-image.gif"
                  : destination.images["image" + randomImage].medium
              }) center center/cover no-repeat`,
              transform: position === index ? styles.activeScale : styles.scale,
            }}
            key={index}
          >
            <Overlay
              style={{
                background:
                  position === index ? styles.activeOverlay : styles.overlay,
              }}
            />
          </Slide>
        ))}
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
