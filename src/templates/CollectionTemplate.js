import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Container from "../components/Shared/Container"
import styled from "@emotion/styled"
import ProductListing from "../components/ProductListing/ProductListing"
import CollectionSideNav from "../components/CollectionSideNav/CollectionSideNav"
import { breakpoints } from "../utils/styles"
import SEO from "../components/Shared/seo"

const CollectionTitle = styled.h2`
  text-align: center;
`
// TODO extract title h2

const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  margin-top: 2rem;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
  }
`

const CollectionProductListing = styled(ProductListing)`
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const CollectionTemplate = ({ data }) => {
  const { shopifyCollection, allShopifyCollection } = data
  return (
    <Layout>
      <SEO
        title={shopifyCollection.title}
        description={shopifyCollection.description}
      />
      <Container>
        <CollectionTitle>{shopifyCollection.title}</CollectionTitle>
        <ListingContainer>
          <CollectionSideNav collections={allShopifyCollection} />
          <CollectionProductListing products={shopifyCollection.products} />
        </ListingContainer>
      </Container>
    </Layout>
  )
}

export default CollectionTemplate

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      title
      description
      products {
        title
        id
        handle
        description
        productType
        variants {
          shopifyId
          title
          price
          compareAtPrice
          availableForSale
        }
        images {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, traceSVG: { color: "#5B85AA" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
    allShopifyCollection {
      nodes {
        handle
        title
      }
    }
  }
`
