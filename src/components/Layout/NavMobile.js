import React from "react"
import { animated } from "react-spring"

const NavMobile = ({ style, closeNav }) => {
  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "70%",
        height: "100%",
        background: "white",
        padding: "40px 2%",
        zIndex: 49,
        overflowY: "auto",
        ...style,
      }}
    >
      <div>
        <div>
          <div>Mens</div>
          <div>Womens</div>
          <div>Contact</div>
        </div>
        <button onClick={closeNav}>Close</button>
      </div>
    </animated.div>
  )
}

export default NavMobile
