import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DestinationsData } from "../context/DataContext";

function Header() {
  const [sideMenuStatus, setSideMenuStatus] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const { destinations } = DestinationsData();

  return (
    <Container>
      <TopMenu>
        <FlexWrap>
          <Logo src="/images/logo.svg" />
          <Navigation>
            <LinkTo to="/">Home</LinkTo>
            <LinkTo to="/about">About</LinkTo>
            <LinkTo to="/destinations">Destinations</LinkTo>
          </Navigation>
          <Button to="/destinations">Explore</Button>
          <Hamburger
            onClick={() => {
              setSideMenuStatus(true);
            }}
          >
            <Icon src="/images/icons/hamburger.svg" />
          </Hamburger>
        </FlexWrap>
      </TopMenu>

      <SideMenu
        style={
          sideMenuStatus
            ? { transform: "translateX(0)" }
            : { transform: "translateX(280px)" }
        }
      >
        <Close
          onClick={() => {
            setSideMenuStatus(false);
          }}
        >
          <Icon src="/images/icons/close.svg" />
        </Close>
        <SideNavigation>
          <LinkTo
            onClick={() => {
              setSideMenuStatus(false);
            }}
            to="/"
          >
            Home
          </LinkTo>
          <LinkTo
            onClick={() => {
              setSideMenuStatus(false);
            }}
            to="/about"
          >
            About
          </LinkTo>
          <Destinations>
            <Top>
              <LinkTo
                onClick={() => {
                  setSideMenuStatus(false);
                }}
                to="/destinations"
              >
                Destinations
              </LinkTo>
              <Dropdown
                onClick={() => {
                  setDropdownStatus(dropdownStatus ? false : true);
                }}
              >
                <SmallIcon
                  src={
                    dropdownStatus
                      ? "/images/icons/up.svg"
                      : "/images/icons/down.svg"
                  }
                />
              </Dropdown>
            </Top>
            <Bottom
              style={
                dropdownStatus ? { display: "block" } : { display: "none" }
              }
            >
              {destinations.map((destination, index) => (
                <Destination
                  style={{ animationDelay: `${index / 4}s` }}
                  key={index}
                >
                  <Link
                    to={"/destination/" + destination.id}
                    onClick={() => {
                      setSideMenuStatus(false);
                    }}
                  >
                    {destination.name}
                  </Link>
                </Destination>
              ))}
            </Bottom>
          </Destinations>
        </SideNavigation>
      </SideMenu>
    </Container>
  );
}

const Container = styled.header`
  height: 0;
  width: 100%;
  position: fixed;
  z-index: 3;
  background: #f9f9f9;
`;

const TopMenu = styled.div`
  height: 140px;
  width: 100%;
  padding: 0 60px;
  background: inherit;

  @media (max-width: 1440px) {
    height: 105px;
  }
  @media (max-width: 768px) {
    height: 96px;
  }
  @media (max-width: 480px) {
    height: 62px;
    padding: 0 32px;
  }
`;

const FlexWrap = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 30px;
  display: block;

  @media (max-width: 640px) {
    height: 20px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkTo = styled(Link)`
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled(Link)`
  padding: 14px 36px;
  background: transparent;
  border: 2px solid #6a6a6a;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Icon = styled.img`
  height: 30px;
  display: block;

  @media (max-width: 640px) {
    height: 20px;
  }
`;

const SideMenu = styled.div`
  height: 100vh;
  width: 240px;
  padding: 16px;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  background: inherit;
  box-shadow: 4px 0px 40px rgba(0, 0, 0, 0.1);
  transform: translateX(280px);
  transition: transform 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Close = styled.div`
  margin-bottom: 30px;
`;

const SideNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Destinations = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Dropdown = styled.div``;

const SmallIcon = styled(Icon)`
  height: 24px;

  @media (max-width: 640px) {
    height: 20px;
  }
`;

const Bottom = styled.div`
  overflow: hidden;
`;

const Destination = styled.div`
  padding: 8px 12px;
  background: #e5e5e5;
  font-size: 16px;
  font-weight: 500;
  color: #202020;
  border-radius: 4px;
  margin-bottom: 8px;

  animation-name: fade-down;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;

  @keyframes fade-down {
    0% {
      opacity: 0;
      visibility: 0;
      transform: translateY(-6px);
    }
    100% {
      opacity: 1;
      visibility: 1;
      transform: translateY(0);
    }
  }
`;

export default Header;
