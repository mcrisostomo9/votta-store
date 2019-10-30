import { graphql } from "gatsby"

export const fluidImageBlurFragment = graphql`
  fragment fluidImageBlurFragment on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
