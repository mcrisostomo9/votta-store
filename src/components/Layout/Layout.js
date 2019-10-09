import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import Footer from "./Footer"
import { StoreContext } from "../../context/StoreContext"
import styled from "@emotion/styled"
import Cart from "../Cart/Cart"
import { useSpring } from "react-spring"

const MainContainer = styled.main`
  ${props => props.isCartOpen && "filter: blur(1px); opacity: .8;"};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { isCartOpen } = useContext(StoreContext)

  const cartNavigation = useSpring({
    transform: isCartOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
  })
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainer isCartOpen={isCartOpen}>{children}</MainContainer>
      <Footer />
      <Cart style={cartNavigation} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
