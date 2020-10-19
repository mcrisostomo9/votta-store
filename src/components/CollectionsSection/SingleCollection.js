import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { backgroundGatsbyImage, breakpoints } from "../../utils/styles"
import { LinkButton } from "../Button/LinkButton"

const CollectionWrapper = styled.div`
  position: relative;
  height: 300px;
  min-height: 300px;

  @media (min-width: ${breakpoints.md}) {
    height: 600px;
  }
`

const TextContainer = styled.div`
  margin: 0 auto;
  z-index: 1;
  position: absolute;
  top: 2rem;
  left: 2rem;

  h4 {
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-size: 1.25rem;
  }
`

const StyledLinkButton = styled(LinkButton)`
  margin-top: 1rem;
`

const SingleCollection = ({ fluid, title, link }) => {
  return (
    <CollectionWrapper>
      {/*<StyledLink to={link}>*/}
      <Image fluid={fluid} style={backgroundGatsbyImage} />
      <TextContainer>
        <h4>{title}</h4>
        <StyledLinkButton to={link}>Shop</StyledLinkButton>
      </TextContainer>
      {/*</StyledLink>*/}
    </CollectionWrapper>
  )
}

export default SingleCollection
