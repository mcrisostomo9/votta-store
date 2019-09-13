import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Container = styled.header`
  height: 90vh;
`

const HeroSection = () => {
  const { heroImage } = useStaticQuery(IMAGE_QUERY)
  return (
    <Container>
      <Img fluid={heroImage.childImageSharp.fluid} style={{ height: "100%" }} />
    </Container>
  )
}

export default HeroSection

const IMAGE_QUERY = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
