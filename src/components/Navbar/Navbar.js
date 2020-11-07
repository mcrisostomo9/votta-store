import { Link } from "gatsby"
import React, { useContext, useState } from "react"
import Headroom from "react-headroom"
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
import SearchIcon from "../SearchIcon"
import { routes } from "../../data/routes"

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 1.5rem;
  position: relative;

  margin: 0 auto;

  @media (min-width: ${breakpoints.md}) {
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
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7rem;
  //padding: 1rem;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 0.8rem;
  }

  :hover {
    color: var(--grey);
    background: var(--light-grey);
    //padding: 0.5rem;
  }
`
const LogoLink = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 125px;
    height: auto;
  }
`
const Offer = styled.div`
  background: var(--background);
  width: 100%;
  text-align: center;
  padding: 0 1rem;
  height: 40px;
  font-size: var(--small-text);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Nav = ({ bannerText }) => {
  const { toggleCartOpen, isCartLoading } = useContext(StoreContext)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuNavigation = useSpring({
    transform: isMenuOpen ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
  })

  return (
    <>
      <Headroom
        style={{
          background: "#fff",
          borderBottom: "var(--line)",
          zIndex: 10,
          height: "var(--header-height)",
        }}
      >
        <Offer>{bannerText}</Offer>
        <NavWrapper>
          <MenuToggle onClick={() => setMenuOpen(!isMenuOpen)}>
            <MdMenu />
          </MenuToggle>
          <DesktopMenu>
            <NavLink
              to={routes.collections("mens-dress-socks")}
              activeStyle={{ fontWeight: 700 }}
            >
              mens
            </NavLink>
            <NavLink
              to={routes.collections("womens-socks")}
              activeStyle={{ fontWeight: 700 }}
            >
              Womens
            </NavLink>
            <NavLink
              to={routes.collections("dress-sock-packs")}
              activeStyle={{ fontWeight: 700 }}
            >
              Sock Packs
            </NavLink>
            <NavLink
              to={routes.collections("mens-premium-dress-socks")}
              activeStyle={{ fontWeight: 700 }}
            >
              Premium
            </NavLink>
          </DesktopMenu>
          <LogoLink to="/">
            <img src={logo} alt="Votta logo" />
          </LogoLink>
          <div style={{ display: "flex" }}>
            <SearchIcon />
            <CartIconIndicator />
          </div>
          <CartAddingIndicator visible={isCartLoading} />
        </NavWrapper>
      </Headroom>
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
