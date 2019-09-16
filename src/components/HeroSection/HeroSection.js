import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "../Layout/Container"
import styled from "@emotion/styled"
import Button from "../Button/Button"
import { breakpoints } from "../../utils/styles"

const TextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 80vh;
`

const ButtonContainer = styled.div`
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

const HeroSection = () => {
  const { heroImage } = useStaticQuery(IMAGE_QUERY)
  return (
    <BackgroundImage Tag="section" fluid={heroImage.childImageSharp.fluid}>
      <TextContainer>
        <h1>Discover your color</h1>
        <p>Premium Socks available in various designs and colors</p>
        <ButtonContainer>
          <Link to="/mens">
            <Button>Shop Mens</Button>
          </Link>
          <Link to="/mens">
            <Button>Shop Womens</Button>
          </Link>
        </ButtonContainer>
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
