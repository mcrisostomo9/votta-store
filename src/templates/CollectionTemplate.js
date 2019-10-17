import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Container from "../components/Container/Container"
import styled from "@emotion/styled"
import ProductListing from "../components/ProductListing/ProductListing"
import CollectionSideNav from "../components/CollectionSideNav/CollectionSideNav"
import { breakpoints } from "../utils/styles"

const CollectionTitle = styled.h2`
  text-align: center;
`
// TODO extract title h2

const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
  }
`

const CollectionTemplate = ({ data }) => {
  const { shopifyCollection, allShopifyCollection } = data
  return (
    <Layout>
      <Container>
        <CollectionTitle>{shopifyCollection.title}</CollectionTitle>
        <ListingContainer>
          <CollectionSideNav collections={allShopifyCollection} />
          <ProductListing products={shopifyCollection.products} />
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
          availableForSale
        }
        images {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400) {
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
