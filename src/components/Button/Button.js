import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button`
  //padding: 1rem;
  transition: all 300ms ease 0s;
  cursor: pointer;
  width: 200px;
  height: 60px;
  border: none;
`

const Button = ({ children, className }) => {
  return <StyledButton className={className}>{children}</StyledButton>
}

export default Button
