import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../utils/styles"

const CartAddingIndicatorRoot = styled.div`
  position: absolute;
  bottom: -2.5rem;
  right: 2rem;
  padding: 0.5rem;
  background: ${colors.darkGrey};
  color: #fff;
  display: ${props => (props.visible ? "block" : "none")};
`

const CartAddingIndicator = ({ visible }) => {
  return (
    <CartAddingIndicatorRoot visible={visible}>
      Adding to cart...
    </CartAddingIndicatorRoot>
  )
}

export default CartAddingIndicator
