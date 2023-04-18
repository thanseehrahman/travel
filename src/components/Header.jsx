import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
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
        </FlexWrap>
      </TopMenu>
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

export default Header;
