import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "../Layout/Container"
import styled from "@emotion/styled"

const TextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 80vh;

  button {
    color: white;
    border: 1px solid white;
    background: transparent;
  }
`

const HeroSection = () => {
  const { heroImage } = useStaticQuery(IMAGE_QUERY)
  return (
    <BackgroundImage Tag="section" fluid={heroImage.childImageSharp.fluid}>
      <TextContainer>
        <h1>Discover your color</h1>
        <p>Premium Socks available in various designs and colors</p>
        <button>Shop Mens</button>
        <button>Shop womens</button>
      </TextContainer>
    </BackgroundImage>
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
