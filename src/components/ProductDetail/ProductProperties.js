import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import data from "../../data/productProperties"
import GridContainer from "./GridContainer"
import TextContainer from "./TextContainer"
import ImgContainer from "../Shared/ImgContainer"

const StyledGridContainer = styled(GridContainer)`
  margin-top: 3rem;
`

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li``

const ListTitle = styled.h5`
  text-transform: uppercase;
  margin: 1.75rem 0 1rem;
  font-size: var(--h6);
`
const ListDescription = styled.p`
  //margin-top: 0.5rem;
`

const ProductProperties = () => {
  const { infographicImage } = useStaticQuery(IMAGE_QUERY)

  return (
    <StyledGridContainer>
      <TextContainer>
        <h4>All of our socks are designed with...</h4>
        <ListContainer>
          {data.map(p => (
            <ListItem key={p.title}>
              <ListTitle>{p.title}</ListTitle>
              <ListDescription>{p.description}</ListDescription>
            </ListItem>
          ))}
        </ListContainer>
      </TextContainer>
      <ImgContainer>
        <Img fluid={infographicImage.childImageSharp.fluid} />
      </ImgContainer>
    </StyledGridContainer>
  )
}

export default ProductProperties

const IMAGE_QUERY = graphql`
  query {
    infographicImage: file(
      relativePath: { eq: "product-infographic-icon-w-text.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
