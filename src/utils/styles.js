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

export const radius = {
  default: 2,
  large: 4,
}

export const defaultFontStack = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
].join()

const monospaceFontStack = [
  `Space Mono`,
  `SFMono-Regular`,
  `Menlo`,
  `Monaco`,
  `Consolas`,
  `Liberation Mono`,
  `Courier New`,
  `monospace`,
].join()

export const fonts = {
  body: defaultFontStack,
  heading: `Futura PT, ${defaultFontStack}`,
  monospace: monospaceFontStack,
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
