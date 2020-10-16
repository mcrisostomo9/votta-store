import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { backgroundGatsbyImage, breakpoints } from "../../utils/styles"
import Button from "../Button/Button"

const CollectionWrapper = styled.div`
  position: relative;
  height: 300px;
  min-height: 300px;
  transition: all 300ms ease 0s;

  @media (min-width: ${breakpoints.md}) {
    height: 600px;
  }

  :hover {
    opacity: 0.8;
  }
`

const StyledLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`

const TextContainer = styled.div`
  margin: 0 auto;
  z-index: 1;
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  h4 {
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-size: 1.25rem;
  }
`

const StyledButton = styled(Button)`
  margin-top: 1.5rem;
`

const SingleCollection = ({ fluid, title, link }) => {
  return (
    <CollectionWrapper>
      <StyledLink to={link}>
        <Image fluid={fluid} style={backgroundGatsbyImage} />
        <TextContainer>
          <h4>{title}</h4>
          <StyledButton>Shop</StyledButton>
        </TextContainer>
      </StyledLink>
    </CollectionWrapper>
  )
}

export default SingleCollection
