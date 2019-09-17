import React from "react"
import Navbar from "./Navbar"
import styled from "@emotion/styled"

const StyledContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
`

const Header = () => (
  <StyledContainer>
    <Navbar />
  </StyledContainer>
)

export default Header
