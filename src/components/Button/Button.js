import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button`
  transition: all 300ms ease 0s;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: none;

  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Roboto, serif;
  letter-spacing: 1px;
  background: var(--dark-grey);

  :hover {
    background: var(--teal);
  }
`

const Button = ({ children, className, onClick, type }) => {
  return (
    <StyledButton className={className} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button
