import React from "react"
import styled from "@emotion/styled"

const CartAddingIndicatorRoot = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  right: 0;
  padding: 0.5rem;
  background: var(--accent);
  color: #fff;
  font-size: var(--small-text);
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
