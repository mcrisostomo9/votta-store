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
    allShopifyCollection(filter: { handle: { eq: "mens-collection" } }) {
      edges {
        node {
          products {
            id
            title
            handle
            images {
              localFile {
                childImageSharp {
                  fixed(width: 200) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
            }
            description
            descriptionHtml
            variants {
              sku
              id
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
