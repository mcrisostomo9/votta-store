import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"
import NavMobile from "./NavMobile"
import { useSpring } from "react-spring"
import Cart from "../Cart/Cart"
import styled from "@emotion/styled"

import {
  // MdClose,
  MdShoppingCart,
  MdMenu,
  // MdArrowBack,
  // MdArrowForward
} from "react-icons/md"
import { breakpoints } from "../../utils/styles"
import ButtonToggle from "../Button/ButtonToggle"

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: relative;

  @media (min-width: ${breakpoints.md}) {
    padding: 1.5rem 2rem;
  }
`

const MenuToggle = styled(ButtonToggle)`
  display: block;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    max-width: 450px;
    width: 30vw;
    justify-content: space-between;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: #1a202c;
  text-transform: uppercase;
  font-weight: bold;
`
const LogoLink = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Nav = () => {
  const { logoImage } = useStaticQuery(LOGO_QUERY)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)
  const menuNavigation = useSpring({
    transform: isMenuOpen ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
  })
  const cartNavigation = useSpring({
    transform: isCartOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
  })

  return (
    <>
      <NavWrapper>
        <MenuToggle onClick={() => setMenuOpen(!isMenuOpen)}>
          <MdMenu />
        </MenuToggle>
        <DesktopMenu>
          <NavLink to="/mens-collection">mens</NavLink>
          <NavLink to="/womens-collection">Womens</NavLink>
          <NavLink to="/dress-sock-packs">Sock Packs</NavLink>
        </DesktopMenu>
        <LogoLink to="/">
          <Img fluid={logoImage.childImageSharp.fluid} style={{ width: 150 }} />
        </LogoLink>
        <ButtonToggle onClick={() => setCartOpen(!isCartOpen)}>
          <MdShoppingCart />
        </ButtonToggle>
      </NavWrapper>
      <NavMobile
        style={menuNavigation}
        closeNav={() => {
          setMenuOpen(false)
        }}
        toggleCart={() => setCartOpen(!isCartOpen)}
      />
      <Cart style={cartNavigation} closeCart={() => setCartOpen(false)} />
    </>
  )
}

const LOGO_QUERY = graphql`
  query logoQuery {
    logoImage: file(relativePath: { eq: "black-logo.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 150) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Nav
