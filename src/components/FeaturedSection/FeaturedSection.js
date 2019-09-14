import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductListing from "../ProductListing/ProductListing"
import styled from "@emotion/styled"

const Container = styled.div``

const H3 = styled.h3`
  text-align: center;
`

const FeaturedSection = () => {
  const { products } = useStaticQuery(PRODUCTS_LISTING_QUERY)
  return (
    <Container>
      <H3>Shop our featured products</H3>
      <ProductListing products={products.edges} />
    </Container>
  )
}

const FEATURED_COLLECTION_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyCollection(filter: { handle: { eq: "featured-collection" } }) {
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

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    products: allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
      edges {
        node {
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
  }
`

export default FeaturedSection
