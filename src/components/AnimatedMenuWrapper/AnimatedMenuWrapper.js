import React from "react"
import styled from "@emotion/styled"
import { animated } from "react-spring"

const Wrapper = styled(animated.div)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 49;
  overflow-y: auto;
  background: #fff;
`

const AnimatedMenuWrapper = ({ style, children, className }) => {
  return (
    <Wrapper style={{ ...style }} className={className}>
      {children}
    </Wrapper>
  )
}

export default AnimatedMenuWrapper
