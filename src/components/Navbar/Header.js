import React from "react"
import Navbar from "./Navbar"
import styled from "@emotion/styled"
import { colors } from "../../utils/styles"

const StyledContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
  border-bottom: 1px solid ${colors.lightGrey};
`

const Header = () => (
  <StyledContainer>
    <Navbar />
  </StyledContainer>
)

export default Header
