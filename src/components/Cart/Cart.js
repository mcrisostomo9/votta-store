import React from "react"
import { animated } from "react-spring"

const Cart = ({ style, closeCart }) => {
  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "70%",
        height: "100%",
        background: "red",
        padding: "40px 2%",
        zIndex: 49,
        overflowY: "auto",
        ...style,
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>Cart is empty</div>
        </div>
        <button onClick={closeCart}>Close</button>
      </div>
    </animated.div>
  )
}

export default Cart
