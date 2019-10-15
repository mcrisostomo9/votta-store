import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import data from "../../data/productProperties"
import GridContainer from "./GridContainer"

const TextContainer = styled.div`
  max-width: 500px;
  justify-self: center;
  align-self: center;
`

const Title = styled.h3``

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li``
const ListTitle = styled.h4`
  text-transform: uppercase;
`
const ListDescription = styled.p``

const ProductProperties = () => {
  const {
    infographicImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(IMAGE_QUERY)
  return (
    <GridContainer>
      <Img fluid={fluid} />
      <TextContainer>
        <Title>All of our socks are designed with...</Title>
        <ListContainer>
          {data.map(p => (
            <ListItem key={p.title}>
              <ListTitle>{p.title}</ListTitle>
              <ListDescription>{p.description}</ListDescription>
            </ListItem>
          ))}
        </ListContainer>
      </TextContainer>
    </GridContainer>
  )
}

export default ProductProperties

const IMAGE_QUERY = graphql`
  query {
    infographicImage: file(relativePath: { eq: "product-infographic.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
