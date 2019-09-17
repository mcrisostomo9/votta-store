import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../utils/styles"

const StyledButton = styled.button`
  transition: all 500ms ease 0s;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: none;
  background: ${colors.darkGrey};
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;

  :hover {
    background: ${colors.teal};
  }
`

const Button = ({ children, className }) => {
  return <StyledButton className={className}>{children}</StyledButton>
}

export default Button
