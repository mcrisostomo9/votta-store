import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductListing from "../ProductListing/ProductListing"
import styled from "@emotion/styled"
import Container from "../Layout/Container"

const H3 = styled.h3`
  text-align: center;
`

const FeaturedSection = () => {
  const { allShopifyCollection } = useStaticQuery(FEATURED_COLLECTION_QUERY)
  const { products } = allShopifyCollection.edges[0].node
  return (
    <Container>
      <H3>Shop our featured products</H3>
      <ProductListing products={products} />
    </Container>
  )
}

const FEATURED_COLLECTION_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyCollection(filter: { handle: { eq: "featured-collection" } }) {
      edges {
        node {
          products {
            title
            handle
            images {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            variants {
              title
              price
            }
          }
        }
      }
    }
  }
`

export default FeaturedSection
