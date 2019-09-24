import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Container from "../Layout/Container"
import SingleCollection from "./SingleCollection"
import { breakpoints } from "../../utils/styles"
import SectionTitle from "../SectionTitle/SectionTitle"

const StyledContainer = styled(Container)`
  padding: 0;
  max-width: initial;

  @media (min-width: ${breakpoints.md}) {
    padding: 0 1.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
  }
`

const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`

const CollectionsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      mensCollection: file(relativePath: { eq: "mens-collection.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      womensCollection: file(relativePath: { eq: "womens-collection.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      premiumCollection: file(relativePath: { eq: "houndstooth.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      packCollection: file(relativePath: { eq: "pack-collection.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledContainer>
      <SectionTitle title="Shop our collections" />
      <CollectionContainer>
        <SingleCollection
          fluid={data.mensCollection.childImageSharp.fluid}
          title="Men's"
          link="/mens-collection"
        />
        <SingleCollection
          fluid={data.womensCollection.childImageSharp.fluid}
          title="Women's"
          link="/womens-collection"
        />
        <SingleCollection
          fluid={data.premiumCollection.childImageSharp.fluid}
          title="Premium"
          link="/mens-premium"
        />
        <SingleCollection
          fluid={data.packCollection.childImageSharp.fluid}
          title="Sock Pack"
          link="/dress-sock-packs"
        />
      </CollectionContainer>
    </StyledContainer>
  )
}

export default CollectionsSection
