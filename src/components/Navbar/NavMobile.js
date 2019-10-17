import React from "react"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"
import styled from "@emotion/styled"
import ButtonToggle from "../Button/ButtonToggle"
import CartIconIndicator from "../Cart/CartIconIndicator"
import Img from "gatsby-image"
import SocialIcon from "../SocialIcon/SocialIcon"
import AnimatedMenuWrapper from "../AnimatedMenuWrapper/AnimatedMenuWrapper"

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
`

const NavFooter = styled.div`
  margin-top: auto;
`

const Callout = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1rem;

  a {
    color: var(--dark-grey);
    text-decoration: none;
  }
`

const SocialContainer = styled.div`
  margin-top: 4rem;
  display: flex;

  a {
    margin-right: 3rem;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  color: var(--dark-grey);
`

const NavMobile = ({ style, closeNav, logoImage }) => {
  return (
    <AnimatedMenuWrapper
      style={{
        ...style,
      }}
    >
      <MenuContainer>
        <TopBarContainer>
          <ButtonToggle onClick={closeNav}>
            <MdClose />
          </ButtonToggle>
          <div onClick={closeNav}>
            <Img fixed={logoImage.childImageSharp.fixed} />
          </div>
          <CartIconIndicator />
        </TopBarContainer>
        <LinksContainer>
          <NavLink to="/collections/mens-collection" onClick={closeNav}>
            Mens
          </NavLink>
          <NavLink to="/collections/womens-collection" onClick={closeNav}>
            Women
          </NavLink>
          <NavLink to="/collections/dress-sock-packs" onClick={closeNav}>
            Sock Pack
          </NavLink>
          <NavLink to="/collections/mens-premium" onClick={closeNav}>
            Premium
          </NavLink>
          <NavLink to="/" onClick={closeNav}>
            About Us
          </NavLink>
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
            <SocialIcon socialNetwork="facebook" />
            <SocialIcon socialNetwork="instagram" />
          </SocialContainer>
        </NavFooter>
      </MenuContainer>
    </AnimatedMenuWrapper>
  )
}

export default NavMobile
