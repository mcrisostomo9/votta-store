import React from "react"
import Navbar from "./Navbar"
import styled from "@emotion/styled"

const Container = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;

  hr {
    margin: 0;
  }
`

const Header = () => (
  <Container>
    <Navbar />
  </Container>
)

export default Header