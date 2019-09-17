import React from "react"
import { animated } from "react-spring"
import { Link } from "gatsby"
import {
  MdClose,
  // MdArrowBack,
  // MdArrowForward
  MdShoppingCart,
} from "react-icons/md"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import styled from "@emotion/styled"
import ButtonToggle from "../Button/ButtonToggle"

const Wrapper = styled(animated.div)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 49;
  overflow-y: auto;
  background: #fff;
`

const MenuContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  a {
    text-decoration: none;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
  }
`

const NavFooter = styled.div`
  margin-top: auto;
`

const Callout = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1rem;

  a {
    //TODO fix color
    color: black;
    text-decoration: none;
  }
`

const SocialContainer = styled.div`
  margin-top: 4rem;
  display: flex;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 3rem;
  }
`

const NavMobile = ({ style, closeNav, toggleCart }) => {
  return (
    <Wrapper
      style={{
        ...style,
      }}
    >
      <MenuContainer>
        <TopBarContainer>
          <ButtonToggle onClick={closeNav}>
            <MdClose />
          </ButtonToggle>
          <ButtonToggle onClick={toggleCart}>
            <MdShoppingCart />
          </ButtonToggle>
        </TopBarContainer>
        <LinksContainer>
          <Link to="/ff" onClick={closeNav}>
            Mens
          </Link>
          <Link to="/" onClick={closeNav}>
            Women
          </Link>
          <Link to="/" onClick={closeNav}>
            Sock Pack
          </Link>
          <Link to="/" onClick={closeNav}>
            About Us
          </Link>
        </LinksContainer>
        <NavFooter>
          <Callout>Need to contact us?</Callout>
          <a
            href="mailto:info@vottasocks.com"
            aria-label="Email Votta Socks customer support"
          >
            info@vottasocks.com
          </a>
          <SocialContainer>
            <FaFacebookF />
            <FaInstagram />
          </SocialContainer>
        </NavFooter>
      </MenuContainer>
    </Wrapper>
  )
}

export default NavMobile
