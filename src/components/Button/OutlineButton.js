import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../utils/styles"

const StyledButton = styled.button`
  position: relative;
  transition: all 300ms ease 0s;
  cursor: pointer;
  width: 200px;
  height: 50px;
  background: transparent;
  color: ${props => props.color};
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Roboto, serif;
  letter-spacing: 1px;
  border: 1px solid ${props => props.color};

  :hover {
    background: ${colors.darkGrey};
    color: #fff;
    border: 1px solid ${colors.darkGrey};
  }
`

const OutlineButton = ({ children, className, color, onClick }) => {
  return (
    <StyledButton className={className} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default OutlineButton
