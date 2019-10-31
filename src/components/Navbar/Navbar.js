import { Link } from "gatsby"
import React, { useContext, useState } from "react"
import NavMobile from "./NavMobile"
import { useSpring } from "react-spring"
import styled from "@emotion/styled"
import { MdMenu } from "react-icons/md"
import { breakpoints } from "../../utils/styles"
import ButtonToggle from "../Button/ButtonToggle"
import { StoreContext } from "../../context/StoreContext"
import CartIconIndicator from "../Cart/CartIconIndicator"
import CartAddingIndicator from "../Cart/CartAddingIndicator"
import logo from "../../images/black-logo.png"

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  margin: 0 auto;

  @media (min-width: ${breakpoints.md}) {
    padding: 1.5rem;
    max-width: 992px;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
  }

  @media (min-width: ${breakpoints.xxl}) {
    max-width: 1680px;
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
  text-transform: uppercase;
  font-size: 0.7rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 0.8rem;
  }
`
const LogoLink = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Nav = () => {
  const { toggleCartOpen, isCartLoading } = useContext(StoreContext)
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
          <NavLink to="/collections/mens-collection">mens</NavLink>
          <NavLink to="/collections/womens-collection">Womens</NavLink>
          <NavLink to="/collections/dress-sock-packs">Sock Packs</NavLink>
          <NavLink to="/collections/mens-premium">Premium</NavLink>
        </DesktopMenu>
        <LogoLink to="/">
          <img src={logo} alt="Votta logo" />
        </LogoLink>
        <CartIconIndicator />
        <CartAddingIndicator visible={isCartLoading} />
      </NavWrapper>
      <NavMobile
        logo={logo}
        style={menuNavigation}
        closeNav={() => {
          setMenuOpen(false)
        }}
        toggleCart={toggleCartOpen}
      />
    </>
  )
}

export default Nav
