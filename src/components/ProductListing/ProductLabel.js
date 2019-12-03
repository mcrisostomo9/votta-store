import React from "react"
import styled from "@emotion/styled"

const Root = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: ${props => props.color && props.color};
  color: #fff;
  font-weight: bold;
  padding: 0.5rem;
  font-size: 0.75rem;
`

const ProductLabel = ({ children, color }) => {
  return <Root color={color}>{children}</Root>
}

export default ProductLabel
