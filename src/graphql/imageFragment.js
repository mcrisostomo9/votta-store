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

export const iconImgFragment = graphql`
  fragment iconImgFragment on File {
    childImageSharp {
      fixed(quality: 100, width: 70) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`
