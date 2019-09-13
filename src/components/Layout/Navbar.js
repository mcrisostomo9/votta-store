import { Link } from "gatsby"
import React, { useState } from "react"
import Logo from "../../images/black-logo.png"
import NavMobile from "./NavMobile"
import { useSpring } from "react-spring"
import Cart from "../Cart/Cart"
import styled from "@emotion/styled"

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  img {
    width: 8rem;
    height: auto;
  }
`

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)
  const menuNavigation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
  })
  const cartNavigation = useSpring({
    transform: isCartOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
  })

  return (
    <>
      <NavWrapper>
        <button
          onClick={() => {
            setNavOpen(!isNavOpen)
            setCartOpen(true)
          }}
        >
          Menu
        </button>
        <NavMobile
          style={menuNavigation}
          closeNav={() => {
            setNavOpen(false)
          }}
        />
        <Link to="/">
          <img src={Logo} alt="Votta Logo" />
        </Link>
        <button onClick={() => setCartOpen(!isCartOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="black"
            className="w-5 h-5"
          >
            <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
        </button>
      </NavWrapper>

      <hr className="border-b border-gray-400 opacity-25 my-0 py-0" />
      <Cart style={cartNavigation} closeCart={() => setCartOpen(false)} />
    </>
  )
}

// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
