import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Container from "../components/Container/Container"
import styled from "@emotion/styled"
import ProductListing from "../components/ProductListing/ProductListing"

const CollectionTitle = styled.h2`
  text-align: center;
`
// TODO extract title h2

const CollectionTemplate = ({ data }) => {
  const { shopifyCollection } = data
  return (
    <Layout>
      <Container>
        <CollectionTitle>{shopifyCollection.title}</CollectionTitle>
        <ProductListing products={shopifyCollection.products} />
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
  }
`
