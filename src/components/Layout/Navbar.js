import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useContext, useState } from "react"
import NavMobile from "./NavMobile"
import { useSpring } from "react-spring"
import styled from "@emotion/styled"
import { MdMenu } from "react-icons/md"
import { breakpoints } from "../../utils/styles"
import ButtonToggle from "../Button/ButtonToggle"
import { StoreContext } from "../../context/StoreContext"
import CartIconIndicator from "../Cart/CartIconIndicator"

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
`
const LogoLink = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Nav = () => {
  const { logoImage } = useStaticQuery(LOGO_QUERY)
  const { toggleCartOpen } = useContext(StoreContext)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuNavigation = useSpring({
    transform: isMenuOpen ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
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
          <Img fixed={logoImage.childImageSharp.fixed} />
        </LogoLink>
        <CartIconIndicator />
      </NavWrapper>
      <NavMobile
        style={menuNavigation}
        closeNav={() => {
          setMenuOpen(false)
        }}
        toggleCart={toggleCartOpen}
      />
    </>
  )
}

const LOGO_QUERY = graphql`
  query logoQuery {
    logoImage: file(relativePath: { eq: "black-logo.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Nav
