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
`

const SingleCollection = ({ fluid, title, link }) => {
  return (
    <CollectionWrapper>
      {/*<StyledLink to={link}>*/}
      <Image fluid={fluid} style={backgroundGatsbyImage} />
      <TextContainer>
        <LinkButton to={link}>Shop {title}</LinkButton>
      </TextContainer>
      {/*</StyledLink>*/}
    </CollectionWrapper>
  )
}

export default SingleCollection
