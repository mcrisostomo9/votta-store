import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useTransition } from "react-spring"
import styled from "@emotion/styled"

import Header from "../Navbar/Header"
import "./layout.css"
import Footer from "../Footer/Footer"
import { StoreContext } from "../../context/StoreContext"
import Cart from "../Cart/Cart"

const MainContainer = styled.main`
  ${props => props.isCartOpen && "filter: blur(1px); opacity: .8;"};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(LAYOUT_QUERY)

  const { isCartOpen } = useContext(StoreContext)

  const cartAnimation = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(100%,0,0)" },
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainer isCartOpen={isCartOpen}>{children}</MainContainer>
      <Footer />
      {cartAnimation.map(
        ({ item, key, props }) => item && <Cart key={key} style={props} />
      )}
    </>
  )
}

const LAYOUT_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
