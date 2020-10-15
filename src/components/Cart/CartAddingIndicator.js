import React from "react"
import styled from "@emotion/styled"

const CartAddingIndicatorRoot = styled.div`
  position: absolute;
  bottom: -2.5rem;
  right: 2rem;
  padding: 0.5rem;
  background: var(--accent);
  color: #fff;
  display: ${props => (props.visible ? "block" : "none")};
`

const CartAddingIndicator = ({ visible }) => {
  return (
    <CartAddingIndicatorRoot visible={visible}>
      Updating Cart...
    </CartAddingIndicatorRoot>
  )
}

export default CartAddingIndicator
