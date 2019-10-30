import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Container from "../Container/Container"
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
  const {
    prismicHomepage: {
      data: { collections },
    },
  } = useStaticQuery(QUERY)
  return (
    <StyledContainer>
      <SectionTitle title="Shop our collections" />
      <CollectionContainer>
        {collections.map(collection => (
          <SingleCollection
            key={collection.collection_name.text}
            title={collection.collection_name.text}
            link={`/collections/${collection.slug.text}`}
            fluid={collection.collection_image.localFile.childImageSharp.fluid}
          />
        ))}
      </CollectionContainer>
    </StyledContainer>
  )
}

export default CollectionsSection

const QUERY = graphql`
  query {
    prismicHomepage {
      data {
        collections {
          collection_name {
            text
          }
          slug {
            text
          }
          collection_image {
            localFile {
              ...fluidImageBlurFragment
            }
          }
        }
      }
    }
  }
`
