import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../utils/styles"

const StyledButton = styled.button`
  cursor: pointer;
  //width: 200px;
  //height: 50px;
  padding: 1rem;
  border: none;
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Roboto, serif;
  letter-spacing: 1px;
  background: ${colors.darkGrey};
  opacity: 0.6;
  pointer-events: none;
  border-radius: var(--border-radius);
  margin-top: 1rem;
`

const DisabledButton = ({ children, className }) => {
  return (
    <StyledButton className={className} disabled>
      {children}
    </StyledButton>
  )
}

export default DisabledButton
