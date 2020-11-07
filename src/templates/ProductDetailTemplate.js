import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ProductDetail from "../components/ProductDetail/ProductDetail"
import SEO from "../components/Shared/seo"

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
      tags
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
        altText
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
