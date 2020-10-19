import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Container from "../Shared/Container"
import styled from "@emotion/styled"
import Button from "../Button/Button"
import { backgroundGatsbyImage, breakpoints } from "../../utils/styles"

const HeroContainer = styled(Container)`
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: ${breakpoints.lg}) {
    justify-content: center;
    height: 700px;
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
  margin-bottom: 5rem;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 10rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-bottom: 0;
  }

  h1 {
    text-transform: uppercase;
    margin: 0;
    font-size: 1.75rem;
    color: #fff;

    @media (min-width: ${breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  p {
    color: #fff;
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

const HeroSection = ({ hero, title, subheader }) => {
  return (
    <HeroContainer>
      <Image
        fluid={hero}
        style={backgroundGatsbyImage}
        imgStyle={{ objectPosition: "75%" }}
      />
      <TextContainer>
        <h1>{title}</h1>
        <p>{subheader}</p>
        <ButtonContainer>
          <Link to="/collections/mens-collection">
            <Button>Shop Mens</Button>
          </Link>
          <Link to="/collections/womens-collection">
            <Button>Shop Womens</Button>
          </Link>
        </ButtonContainer>
      </TextContainer>
    </HeroContainer>
  )
}

export default HeroSection
