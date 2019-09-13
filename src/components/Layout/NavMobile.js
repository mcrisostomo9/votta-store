import React from "react"
import { animated } from "react-spring"

const NavMobile = ({ style, closeNav }) => {
  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30%",
        height: "100%",
        background: "white",
        padding: "40px 2%",
        zIndex: 49,
        overflowY: "auto",
        ...style,
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>home</div>
          <div>home</div>
          <div>home</div>
        </div>
        <button onClick={closeNav}>Close</button>
      </div>
    </animated.div>
  )
}

export default NavMobile
