import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ProductDetail from "../components/ProductDetail/ProductDetail"
import SEO from "../components/seo"

const ProductDetailTemplate = ({ data }) => {
  const { shopifyProduct: product } = data
  return (
    <Layout>
      <SEO title={product.title} description={product.description} />
      <ProductDetail product={product} />
    </Layout>
  )
}

export default ProductDetailTemplate

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      handle
      title
      productType
      description
      descriptionHtml
      variants {
        id
        shopifyId
        title
        price
        compareAtPrice
        sku
        availableForSale
      }
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
