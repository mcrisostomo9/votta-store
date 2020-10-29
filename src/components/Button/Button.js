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
  background: var(--main-dark);
  border-radius: var(--border-radius);

  :hover {
    background: var(--accent);
  }

  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    border-color: rgba(99, 179, 237, 1);
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
