import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Container from "../Layout/Container"
import styled from "@emotion/styled"
import Button from "../Button/Button"
import { backgroundGatsbyImage, breakpoints } from "../../utils/styles"

const HeroContainer = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: ${breakpoints.lg}) {
    justify-content: center;
  }
`

const TextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 10rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-bottom: 0;
  }

  h1 {
    text-transform: uppercase;
    margin: 0;

    @media (min-width: ${breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1rem;
    margin-top: 0.75rem;

    @media (min-width: ${breakpoints.md}) {
      font-size: 1.25rem;
      margin-top: 1rem;
    }
  }
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
    <HeroContainer>
      <Image
        fluid={heroImage.childImageSharp.fluid}
        style={backgroundGatsbyImage}
        imgStyle={{ objectPosition: "right" }}
      />
      <TextContainer>
        <h1>Discover your color</h1>
        <p>Premium Socks available in various designs and colors</p>
        <ButtonContainer>
          <Link to="/mens-collection">
            <Button>Shop Mens</Button>
          </Link>
          <Link to="/womens-collection">
            <Button>Shop Womens</Button>
          </Link>
        </ButtonContainer>
      </TextContainer>
    </HeroContainer>
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
