import React from "react"
import { animated } from "react-spring"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"

const NavMobile = ({ style, closeNav }) => {
  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "white",
        padding: "40px 2%",
        zIndex: 49,
        overflowY: "auto",
        ...style,
      }}
    >
      <div>
        <div>Mens</div>
        <div>Womens</div>
        <div>Contact</div>
      </div>
      <button onClick={closeNav}>Close</button>
    </animated.div>
  )
}

export default NavMobile
