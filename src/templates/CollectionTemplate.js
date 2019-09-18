import React from "react"
import { graphql } from "gatsby"
import ProductListingItem from "../components/ProductListing/ProductListingItem"
import Layout from "../components/Layout/Layout"

const CollectionTemplate = ({ data }) => {
  const { shopifyCollection } = data

  return (
    <Layout>
      <div>
        <h2>{shopifyCollection.title}</h2>
        <div>
          {shopifyCollection.products.map(product => (
            <ProductListingItem key={product.id} product={product} />
          ))}
        </div>
      </div>
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
