import React from "react"
import { animated } from "react-spring"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"

const Wrapper = styled(animated.div)`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background: red;
  padding: 40px 2%;
  z-index: 49;
  overflow-y: auto;

  @media (min-width: ${breakpoints.md}) {
    width: 30vw;
    min-width: 450px;
  }
`

const Cart = ({ style, closeCart }) => {
  return (
    <Wrapper
      style={{
        ...style,
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>Cart is empty</div>
        </div>
        <button onClick={closeCart}>Close</button>
      </div>
    </Wrapper>
  )
}

export default Cart
