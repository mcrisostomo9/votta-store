import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductListing from "../ProductListing/ProductListing"
import Container from "../Shared/Container"
import SectionTitle from "../Shared/SectionTitle"

const FeaturedSection = () => {
  const { allShopifyCollection } = useStaticQuery(FEATURED_COLLECTION_QUERY)
  const { products } = allShopifyCollection.edges[0].node
  return (
    <Container>
      <SectionTitle title="Shop our featured products" />
      <ProductListing products={products.slice(0, 8)} />
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
              availableForSale
            }
          }
        }
      }
    }
  }
`

export default FeaturedSection
