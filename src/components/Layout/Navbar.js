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
  // MdArrowBack,
  // MdArrowForward
} from "react-icons/md"

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Nav = () => {
  const { logoImage } = useStaticQuery(LOGO_QUERY)
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
          <Img fluid={logoImage.childImageSharp.fluid} style={{ width: 150 }} />
        </Link>
        <button onClick={() => setCartOpen(!isCartOpen)}>
          <MdShoppingCart />
        </button>
      </NavWrapper>
      <hr />
      <Cart style={cartNavigation} closeCart={() => setCartOpen(false)} />
    </>
  )
}

const LOGO_QUERY = graphql`
  query logoQuery {
    logoImage: file(relativePath: { eq: "black-logo.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Nav
