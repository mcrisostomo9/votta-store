import React from "react"
import styled from "@emotion/styled"

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
  border-radius: var(--border-radius);

  :hover {
    background: var(--main-dark);
    color: #fff;
    border: 1px solid var(--main-dark);
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
