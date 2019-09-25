import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { backgroundGatsbyImage, breakpoints } from "../../utils/styles"

const CollectionWrapper = styled.div`
  position: relative;
  height: 25vh;
  min-height: 300px;
  transition: all 300ms ease 0s;

  @media (min-width: ${breakpoints.md}) {
    height: 350px;
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
  position: relative;
  margin: 0 auto;

  h3 {
    font-weight: 700;
    text-transform: uppercase;
  }
`

const SingleCollection = ({ fluid, title, link }) => {
  return (
    <CollectionWrapper>
      <StyledLink to={link}>
        <Image fluid={fluid} style={backgroundGatsbyImage} />
        <TextContainer>
          <h3>{title}</h3>
        </TextContainer>
      </StyledLink>
    </CollectionWrapper>
  )
}

export default SingleCollection
