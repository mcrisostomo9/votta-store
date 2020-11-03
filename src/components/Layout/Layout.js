import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useTransition } from "react-spring"
import styled from "@emotion/styled"

import "./layout.css"
import Footer from "../Footer/Footer"
import { StoreContext } from "../../context/StoreContext"
import Cart from "../Cart/Cart"
import Navbar from "../Navbar/Navbar"
import { graphql, useStaticQuery } from "gatsby"

const Offer = styled.div`
  background: var(--background);
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  font-family: Raleway, sans-serif;
  color: var(--main-dark);
`

const MainContainer = styled.main`
  ${props => props.isCartOpen && "filter: blur(1px); opacity: .8;"};
`

const Layout = ({ children }) => {
  const { prismicHomepage } = useStaticQuery(OFFER_QUERY)
  const { isCartOpen } = useContext(StoreContext)

  const cartAnimation = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(100%,0,0)" },
  })

  return (
    <>
      <Offer>{prismicHomepage.data.offer_text.text}</Offer>
      <Navbar />
      <MainContainer isCartOpen={isCartOpen}>{children}</MainContainer>
      <Footer />
      {cartAnimation.map(
        ({ item, key, props }) => item && <Cart key={key} style={props} />
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const OFFER_QUERY = graphql`
  query offerQuery {
    prismicHomepage {
      data {
        offer_text {
          text
        }
      }
    }
  }
`
