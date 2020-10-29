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
      <ProductDetail
        product={product}
        // relatedProducts={allShopifyCollection.edges[0].node.products}
      />
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
    #    allShopifyCollection(
    #      limit: 2
    #      filter: { products: { elemMatch: { handle: { ne: $handle } } } }
    #    ) {
    #      edges {
    #        node {
    #          products {
    #            title
    #            handle
    #            images {
    #              localFile {
    #                childImageSharp {
    #                  fluid(maxWidth: 400) {
    #                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #                  }
    #                }
    #              }
    #            }
    #            variants {
    #              title
    #              price
    #              availableForSale
    #            }
    #          }
    #        }
    #      }
    #    }
  }
`
