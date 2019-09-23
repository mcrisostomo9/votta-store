import { keyframes } from "@emotion/core"

/*
 * NOTE: use a six-character hex code for all colors to allow alpha channel
 * adjustment without adding extra vars and/or a color manipulation lib.
 *
 * Example:
 *    // use the brand color at 25% opacity
 *    border-color: ${colors.brand}40;
 */
export const colors = {
  lightGrey: `#e2e8f0`,
  darkGrey: `#1A202C`,
  teal: `#4FD1C5`,
}

export const breakpoints = {
  sm: `640px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1280px`,
  xxl: `1680px`,
}

export const backgroundGatsbyImage = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

const simpleEntry = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
`

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`

export const animations = {
  simpleEntry: `${simpleEntry} .75s ease forwards`,
  deadSimpleEntry: `${deadSimpleEntry} .5s ease forwards`,
}
